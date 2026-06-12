# Collecting suggestions in a Google Sheet

The Suggestions page can send every submitted idea straight to a Google Sheet
you own. It uses a small **Google Apps Script Web App** (free, no server needed).
Takes about 5 minutes.

## 1. Create the sheet
1. Go to <https://sheets.google.com> and create a new spreadsheet (call it e.g. *Knox Suggestions*).
2. Rename the first tab to **Suggestions** (bottom-left).
3. In row 1, add headers: `Received | Title | Details | Name | Submitted | Page`.

## 2. Add the script
1. In the sheet: **Extensions → Apps Script**.
2. Delete anything there and paste this:

```javascript
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Suggestions') || ss.insertSheet('Suggestions');
    var p = (e && e.parameter) || {};
    sheet.appendRow([ new Date(), p.title || '', p.text || '', p.name || '', p.time || '', p.page || '' ]);
    return ContentService.createTextOutput('ok');
  } finally {
    lock.releaseLock();
  }
}
```

3. Click **Save** (disk icon).

## 3. Deploy it
1. **Deploy → New deployment**.
2. Gear icon → choose **Web app**.
3. Set **Execute as: Me**, and **Who has access: Anyone**.
4. Click **Deploy**, authorise when prompted (allow your own account).
5. Copy the **Web app URL** (ends in `/exec`).

## 4. Plug it into the site
1. Open `suggestions.html`.
2. Find this line near the top of the `<script>`:
   ```js
   const SHEET_ENDPOINT = '';
   ```
3. Paste your URL inside the quotes:
   ```js
   const SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfyc.../exec';
   ```
4. Commit and push. Done — new ideas now appear as rows in your sheet.

## Notes
- The site also keeps a copy in each visitor's browser for the on-page list;
  the **sheet is your master inbox** you can read any time.
- To stop collecting, blank out `SHEET_ENDPOINT` again, or in Apps Script use
  **Deploy → Manage deployments → Archive**.
- If you change the script later, redeploy as a **new version** to get a fresh URL
  (or **Manage deployments → Edit → New version**).
