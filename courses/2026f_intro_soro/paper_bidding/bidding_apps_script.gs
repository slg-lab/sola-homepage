/**
 * Soft Robotics paper bidding: builds the Google Form and assigns papers FCFS by ranked preference.
 * Setup: create a new Google Sheet > Extensions > Apps Script > paste this file > run setup() once (authorize).
 */
const PAPERS = [["P01", 3, "Pneumatic Networks for Soft Robotics that Actuate Rapidly"], ["P02", 3, "Artificial Muscles from Fishing Line and Sewing Thread"], ["P03", 3, "Hydraulically Amplified Self-Healing Electrostatic Actuators with Muscle-Like Performance"], ["P04", 3, "Peano-HASEL Actuators: Muscle-Mimetic, Electrohydraulic Transducers that Linearly Contract on Activation"], ["P05", 3, "Soft Robotics: Review of Fluid-Driven Intrinsically Soft Devices; Manufacturing, Sensing, Control, and Applications in Human-Robot Interaction"], ["P06", 4, "Control of Elastic Soft Robots Based on Real-Time Finite Element Method"], ["P07", 4, "Discrete Cosserat Approach for Multisection Soft Manipulator Dynamics"], ["P08", 4, "A Geometrically Exact Model for Soft Continuum Robots: The Finite Element Deformation Space Formulation"], ["P09", 4, "Software Toolkit for Modeling, Simulation, and Control of Soft Robots"], ["P10", 4, "Design and Kinematic Modeling of Constant Curvature Continuum Robots: A Review"], ["P11", 5, "Design and Fabrication of Soft Artificial Skin Using Embedded Microchannels and Liquid Conductors"], ["P12", 5, "Design and Characterization of a Soft Multi-Axis Force Sensor Using Embedded Microfluidic Channels"], ["P13", 5, "Soft Somatosensitive Actuators via Embedded 3D Printing"], ["P14", 5, "Optoelectronically Innervated Soft Prosthetic Hand via Stretchable Optical Waveguides"], ["P15", 5, "Electronic Skins and Machine Learning for Intelligent Soft Robots"], ["P16", 6, "Learning Closed Loop Kinematic Controllers for Continuum Manipulators in Unstructured Environments"], ["P17", 6, "Dynamic Control of Soft Robots Interacting with the Environment"], ["P18", 6, "Dynamically Closed-Loop Controlled Soft Robotic Arm Using a Reduced Order Finite Element Model with State Observer"], ["P19", 6, "Model-Based Reinforcement Learning for Closed-Loop Dynamic Control of Soft Robotic Manipulators"], ["P20", 6, "Data-Driven Control of Soft Robots Using Koopman Operator Theory"], ["P21", 7, "Universal Robotic Gripper Based on the Jamming of Granular Material"], ["P22", 7, "A Novel Type of Compliant and Underactuated Robotic Hand for Dexterous Grasping"], ["P23", 7, "Versatile Soft Grippers with Intrinsic Electroadhesion Based on Multifunctional Polymer Actuators"], ["P24", 7, "Soft Robotic Grippers for Biological Sampling on Deep Reefs"], ["P25", 7, "Soft Manipulators and Grippers: A Review"], ["P26", 8, "Soft Robot Arm Inspired by the Octopus"], ["P27", 8, "An Integrated Design and Fabrication Strategy for Entirely Soft, Autonomous Robots"], ["P28", 8, "A 3D-Printed, Functionally Graded Soft Robot Powered by Combustion"], ["P29", 8, "A Resilient, Untethered Soft Robot"], ["P30", 8, "Soft Robotic Glove for Combined Assistance and At-Home Rehabilitation"], ["P31", 9, "Multigait Soft Robot"], ["P32", 9, "A Soft Robot that Navigates its Environment Through Growth"], ["P33", 9, "Exploration of Underwater Life with an Acoustically Controlled Soft Robotic Fish"], ["P34", 9, "A Reconfigurable Omnidirectional Soft Robot Based on Caterpillar Locomotion"], ["P35", 9, "Untethered Soft Robotics"], ["P36", 10, "Soft Robot Perception Using Embedded Soft Sensors and Recurrent Neural Networks"], ["P37", 10, "Haptic Identification of Objects Using a Modular Soft Robotic Gripper"], ["P38", 10, "DIGIT: A Novel Design for a Low-Cost Compact High-Resolution Tactile Sensor with Application to In-Hand Manipulation"], ["P39", 10, "More Than a Feeling: Learning to Grasp and Regrasp Using Vision and Touch"], ["P40", 10, "Learning the Signatures of the Human Grasp Using a Scalable Tactile Glove"], ["P41", 11, "Automatic Design and Manufacture of Soft Robots"], ["P42", 11, "ChainQueen: A Real-Time Differentiable Physical Simulator for Soft Robotics"], ["P43", 11, "Learning-in-the-Loop Optimization: End-to-End Control and Co-Design of Soft Robots Through Learned Deep Latent Representations"], ["P44", 11, "SoMoGym: A Toolkit for Developing and Evaluating Controllers and Reinforcement Learning Algorithms for Soft Robots"], ["P45", 11, "A Scalable Pipeline for Designing Reconfigurable Organisms"], ["P46", 12, "Information Processing via Physical Soft Body"], ["P47", 12, "Unshackling Evolution: Evolving Soft Robots with Multiple Materials and a Powerful Generative Encoding"], ["P48", 12, "RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control"], ["P49", 12, "Robotic-CLIP: Fine-Tuning CLIP on Action Data for Robotic Applications"], ["P50", 12, "No-Brainer: Morphological Computation Driven Adaptive Behavior in Soft Robots"]]; // [id, week, title]
const NUM_CHOICES = 5;
const MAX_PER_WEEK = 3; // a week closes once this many papers are assigned

function label(p){ return p[0] + ' | Wk' + p[1] + ' | ' + p[2]; }

function setup() {
  const ss = SpreadsheetApp.getActive();
  let sh = ss.getSheetByName('Assignments') || ss.insertSheet('Assignments');
  sh.clear(); sh.appendRow(['PaperID','Presenter']); // public sheet: publish ONLY this one
  PAPERS.forEach(p => sh.appendRow([p[0], '']));
  let pv = ss.getSheetByName('Private') || ss.insertSheet('Private');
  pv.clear(); pv.appendRow(['PaperID','Name','StudentID','Email','Rank won','Timestamp']);
  sh.setFrozenRows(1);

  const form = FormApp.create('Soft Robotics - Paper Presentation Bidding (Fall 2026)');
  form.setDescription('Rank your top ' + NUM_CHOICES + ' papers (1 = most wanted). First come, first served: you get your highest-ranked paper still available when your response is processed. Submit ONCE.\nBrowse papers: <your website URL>');
  form.setCollectEmail(true).setLimitOneResponsePerUser(false).setAllowResponseEdits(false);
  form.addTextItem().setTitle('Full name').setRequired(true);
  form.addTextItem().setTitle('Student ID').setRequired(true);
  for (let i = 1; i <= NUM_CHOICES; i++) {
    form.addListItem().setTitle('Choice #' + i).setChoiceValues(PAPERS.map(label)).setRequired(true);
  }
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());
  ScriptApp.getProjectTriggers().forEach(t => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('onSubmit').forSpreadsheet(ss).onFormSubmit().create();
  Logger.log('Share this link with students: ' + form.getPublishedUrl());
  Logger.log('Edit form (set open/close): ' + form.getEditUrl());
}

function onSubmit(e) {
  const lock = LockService.getScriptLock(); lock.waitLock(30000); // serialize = strict timestamp order
  try {
    const v = e.namedValues, email = (v['Email Address'] || [''])[0].trim().toLowerCase();
    const name = v['Full name'][0].trim(), sid = v['Student ID'][0].trim();
    const sh = SpreadsheetApp.getActive().getSheetByName('Assignments');
    const pv = SpreadsheetApp.getActive().getSheetByName('Private');
    const rows = sh.getDataRange().getValues();
    if (pv.getDataRange().getValues().some((r, i) => i > 0 && String(r[3]).toLowerCase() === email)) {
      return MailApp.sendEmail(email, 'Paper bidding: already assigned', 'You already hold a paper; later submissions are ignored.');
    }
    const prefs = []; for (let i = 1; i <= NUM_CHOICES; i++) prefs.push(v['Choice #' + i][0].split(' | ')[0]);
    const weekCount = {};
    rows.slice(1).forEach(r => { if (r[1]) { const w = PAPERS.find(x => x[0] === r[0])[1]; weekCount[w] = (weekCount[w] || 0) + 1; } });
    for (let k = 0; k < prefs.length; k++) {
      const wk = PAPERS.find(x => x[0] === prefs[k])[1];
      if ((weekCount[wk] || 0) >= MAX_PER_WEEK) continue;
      const idx = rows.findIndex((r, i) => i > 0 && r[0] === prefs[k]);
      if (idx > 0 && !rows[idx][1]) {
        sh.getRange(idx + 1, 2).setValue(name);
        pv.appendRow([prefs[k], name, sid, email, k + 1, new Date()]);
        const p = PAPERS.find(x => x[0] === prefs[k]);
        return MailApp.sendEmail(email, 'Paper bidding result: ' + p[0],
          'Hi ' + name + ',\n\nYou are assigned: ' + label(p) + ' (your choice #' + (k + 1) + ').\n\nSee the schedule on the course site.');
      }
    }
    MailApp.sendEmail(email, 'Paper bidding: waitlisted',
      'Hi ' + name + ',\n\nAll 5 of your choices were already taken or in weeks that are full. Please pick one of the remaining papers listed on the course site and email the instructor.');
  } finally { lock.releaseLock(); }
}

/** Live status endpoint: Deploy > New deployment > Web app (Execute as: Me, Access: Anyone). Returns {"P01":"Name",...} */
function doGet() {
  const rows = SpreadsheetApp.getActive().getSheetByName('Assignments').getDataRange().getValues();
  const out = {};
  rows.slice(1).forEach(r => { if (r[1]) out[r[0]] = r[1]; });
  return ContentService.createTextOutput(JSON.stringify(out)).setMimeType(ContentService.MimeType.JSON);
}
