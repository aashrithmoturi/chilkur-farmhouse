# Chilkur Farmhouse — Client Information Intake

Fill in each section below. Anything left blank keeps the current **placeholder**
on the live site. The **"Maps to"** line tells you exactly where each answer is
plugged in (file + field, or which folder to drop a media file into).

> Tip: Most text answers go into a single file: `lib/site.ts`.
> All photos/videos/logo go into the `public/images` and `public/videos` folders.

---

## 1. Farmhouse Name
- Display name: ____________________
- Legal / business name (if different): ____________________

**Maps to:** `lib/site.ts` -> `site.name`, `site.legalName`

---

## 2. Short Description / Tagline
- One-line tagline: ____________________
- 2-3 sentence description: ____________________

**Maps to:** `lib/site.ts` -> `site.description` (and reused in About/SEO)

---

## 3. Address & Google Maps
- Full address: ____________________
- Pincode: ____________________
- Google Maps share link: ____________________
- Google Maps EMBED link (Share -> Embed a map -> copy `src`): ____________________

**Maps to:** `lib/site.ts` -> `site.address.*`, `site.geo.lat/lng`,
`site.maps.embed`, `site.maps.directions`

---

## 4. Contact Details
- Primary phone: ____________________
- Secondary phone (optional): ____________________
- WhatsApp number (with country code, no +): ____________________
- Email: ____________________

**Maps to:** `lib/site.ts` -> `site.phonePrimary`, `site.phoneSecondary`,
`site.phoneDisplay`, `site.whatsapp`, `site.email`

---

## 5. Logo
- Do you have a logo? (Yes / No): ____________________
- Action: drop the file at `public/images/logo.png`

**Maps to:** `lib/site.ts` -> set `site.hasLogo: true` once the file is added.
(Falls back to a "CF" monogram until then.)

---

## 6. Photos  (drop files into `public/images/`)
Provide high-quality images for each. Suggested filenames in brackets.
- Exterior / front view  [hero.jpg]: __________
- Rooms  [room-master.jpg, room-twin.jpg]: __________
- Swimming pool  [pool.jpg]: __________
- Farm / garden / lawn  [farm.jpg]: __________
- Dining / kitchen  [dining.jpg]: __________
- Amenities (bonfire, games, etc.): __________
- Events / celebrations  [events.jpg]: __________
- Guest experience / lifestyle shots: __________

**Maps to:** `lib/site.ts` -> `gallery[]`, `showcase[]`, `rooms[].image`
(filenames are referenced there)

---

## 7. Videos  (drop files into `public/videos/`)
- Property walkthrough  [walkthrough.mp4]: __________
- Drone / aerial  [drone.mp4]: __________
- Guest experience reel  [experience.mp4]: __________
- (Or) YouTube links instead of files: __________

**Maps to:** `lib/site.ts` -> `videos[]`

---

## 8. Rooms & Pricing
For each room type:
| Room type | Max occupancy | Beds | Weekday price | Weekend price |
|-----------|---------------|------|---------------|---------------|
| ________  | ________      | ____ | ____          | ____          |
| ________  | ________      | ____ | ____          | ____          |
| ________  | ________      | ____ | ____          | ____          |

**Maps to:** `lib/site.ts` -> `rooms[]`.
Once real prices are confirmed, set `showPricing = true` to display them.

---

## 9. Amenities & Activities
List everything offered (pool, bonfire, BBQ, indoor games, cricket/badminton,
parking, caretaker, Wi-Fi, AC, pet-friendly, etc.):
- ____________________
- ____________________
- ____________________

**Maps to:** `lib/site.ts` -> `amenities` data used by `Amenities.tsx`

---

## 10. FAQs
Add/adjust any questions and confirm the answers (check-in/out times, food
policy, pets, alcohol, capacity, cancellation, parking, distance):
- Q: ____________________  A: ____________________
- Q: ____________________  A: ____________________

**Maps to:** `lib/site.ts` -> `faqs[]` (also powers FAQ rich-results SEO)

---

## 11. Reviews & Listing Profiles
- Google Business / Maps review link: ____________________
- Booking.com listing link: ____________________
- Airbnb listing link: ____________________
- 3-5 real guest quotes (name, location, rating, text): ____________________

**Maps to:** `lib/site.ts` -> `site.reviews.*` and `testimonials[]`

---

## 12. Nearby Attractions
Confirm names + distances (temple, lakes, parks, etc.):
- ____________________ (___ km)
- ____________________ (___ km)

**Maps to:** `lib/site.ts` -> `attractions[]`

---

## 13. Social Media Links
- Instagram: ____________________
- Facebook: ____________________
- YouTube: ____________________
- Other: ____________________

**Maps to:** `lib/site.ts` -> `site.social.*`

---

## 14. SEO Keywords
Target search phrases (e.g. "farmhouse near Hyderabad", "farmhouse for rent in
Chilkur", "weekend getaway near Hyderabad"):
- ____________________
- ____________________
- ____________________

**Maps to:** `app/layout.tsx` metadata keywords + the SEO landing pages in `app/`

---

### Analytics / Verification (optional, for go-live)
- Google Analytics ID (G-XXXXXXXXXX): ____________________  -> `site.gaId`
- Google Search Console verification code: ____________________  -> `site.googleVerification`
