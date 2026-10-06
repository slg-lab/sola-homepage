# Paper Bidding Guide

**Mechanism: ranked first-come-first-served (serial dictatorship by timestamp).**
1. Student submits the Google Form once with a ranked top-5 (all 50 papers listed, `P01 | Wk3 | title`).
2. Responses are processed strictly in submission order. Each student gets the highest-ranked paper still free.
3. All 5 taken -> waitlist; student picks from remaining papers (website shows "Available only").
4. Each week accepts at most 3 presenters (`MAX_PER_WEEK`); once full, its remaining papers are skipped and shown as "Not available" on the site.
5. Duplicate submissions from the same email are ignored. Result emailed instantly.

Why: speed is rewarded (FCFS) but preference still matters, and nobody has to refresh the form hoping a paper is free.
Tips: open the form at a fixed time (e.g. after class); consider a 10-minute "preview" so everyone reads papers first; optionally cap one paper per week-topic.

## Setup (10 min)
1. New Google Sheet -> Extensions -> Apps Script -> paste `bidding_apps_script.gs` -> run `setup()` (authorize). Check the log for the form link.
2. In the Form: Settings -> Responses -> keep "Collect email addresses"; schedule open/close if desired (or toggle "Accepting responses").
3. Apps Script -> Deploy -> New deployment -> Web app -> Execute as **Me**, Access **Anyone** -> copy the URL. It serves only paper ID + name (no emails), live.
4. In `index.html` fill `FORM_URL`, `STATUS_URL`, `OPEN_TIME`. Host anywhere (GitHub Pages, Dropbox, LMS).
5. Test with 2-3 dummy submissions, then clear rows in `Assignments` col B and `Private`.

The site polls `STATUS_URL` every 10 s (a second or two of lag). The form remains the source of truth. After editing the script, redeploy (Manage deployments -> new version).
