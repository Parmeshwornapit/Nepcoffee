# Nep Coffee — Cash on Delivery Funnel

A production-ready Next.js App Router sales funnel for Nep Coffee. It includes the landing page (`/`), checkout (`/checkout`), thank-you page (`/thank-you`), and a secure server-side order endpoint (`POST /api/order`).

## Order flow

1. A shopper selects one of the pack offers on the landing page.
2. The selected quantity and price are carried to checkout in the URL; product fields are never manually entered by the shopper.
3. On submission, `/api/order` validates the data, creates an Order ID, appends a row to Google Sheets, sends the business notification and customer confirmation email, then returns success.
4. The shopper is redirected to the thank-you page only after all three server-side actions succeed.

## Local setup

```bash
npm install
Copy-Item .env.example .env.local
npm run dev
```

Open `http://localhost:3000`. Never commit `.env.local`.

## Google Sheet setup

1. Open the provided spreadsheet and select/create a tab named `Customer` (or set a different `GOOGLE_SHEET_TAB_NAME`).
2. In row 1 add these exact headers in order:

   `Order ID`, `Date & Time`, `Customer Name`, `Phone Number`, `Email Address`, `Exact Location`, `Product Name`, `Quantity`, `Price Per Piece`, `Total Price`, `Payment Method`, `Order Status`, `Notes`

3. Select the header row and choose **Data → Create a filter**.
4. To create status choices: select the Order Status column → **Data → Data validation → Dropdown**. Add: `New Order`, `Order Confirmed`, `Order Ongoing`, `Delivered`, `Cancelled`.
5. The Sheet ID is the part between `/d/` and `/edit` in its URL. For your provided Sheet it is already included in `.env.example`.
6. In Google Cloud, enable the **Google Sheets API**, create a service account, generate a JSON key, then copy its `client_email` into `GOOGLE_SERVICE_ACCOUNT_EMAIL` and its `private_key` into `GOOGLE_PRIVATE_KEY`. Preserve newlines as literal `\n` if entering one line.
7. Share the Google Sheet with the service account `client_email` and grant it **Editor** access.

## Email setup

This project uses Nodemailer SMTP. Configure your provider’s SMTP host, port, username and password in `.env.local`. For Gmail, use a Google App Password (not your regular account password), SMTP host `smtp.gmail.com`, port `465` for SSL or `587` for STARTTLS. Set `EMAIL_FROM` to an approved sender, e.g. `Nep Coffee <your@email.com>`. `BUSINESS_EMAIL` receives every new order.

`EMAIL_SERVICE_API_KEY` is reserved for a future Resend/Brevo/SendGrid switch and is not required by the included SMTP implementation.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public deployed site URL |
| `BUSINESS_EMAIL` | Destination for new-order emails |
| `EMAIL_FROM` | Verified sender address shown in emails |
| `BRAND_NAME` | Email brand label |
| `GOOGLE_SHEET_ID`, `GOOGLE_SHEET_TAB_NAME` | Google Sheets destination |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY` | Service-account credentials |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | SMTP credentials |
| `FRONTEND_URL` | Optional allowed browser origin, e.g. `https://your-site.vercel.app` |

## Test the order process

1. Add working Sheet and SMTP values to `.env.local`.
2. Run `npm run dev`, select an offer, and submit checkout with a real email you can access.
3. Confirm a new row appears in `Customer`, the business inbox gets a detailed new-order email, and the customer inbox receives the confirmation.
4. Verify the browser redirects to `/thank-you`. If an integration fails, the customer remains on checkout and sees a clear message. Server details are logged only on the server.

## Deploy on Vercel

1. Push this repository to GitHub, import it in Vercel, and select the repository.
2. Add every value from `.env.example` under **Project Settings → Environment Variables**; use Production (and Preview if needed).
3. Set `FRONTEND_URL` and `NEXT_PUBLIC_SITE_URL` to the final Vercel URL/custom domain, without a trailing slash.
4. Deploy, then place a real test order. Keep credentials only in Vercel’s environment settings—never in frontend code or source control.

## Notes

- Delivery is communicated as free inside Kathmandu Valley; prices outside the valley are confirmed by the sales team according to distance.
- No payment gateway is included; every order is Cash On Delivery.
- Reels are intentionally absent: none were supplied as links. Add a reels section only when actual video URLs are available.
