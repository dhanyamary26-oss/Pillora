# Pillora – Medication Adherence Platform

## Run in VS Code
1. Unzip and open the `pillora` folder in VS Code.
2. Install the "Live Server" extension, right-click `index.html`, choose "Open with Live Server".
   (Opening index.html directly also works, but Live Server enables offline caching.)
3. Register an account (Patient, Caregiver, Doctor or Pharmacist) and log in.

## Try the family flow
Register a patient, then register a caregiver or doctor in another browser profile or after logging out.
The caregiver requests access with the patient's email. The patient approves it under "Family & privacy" and picks what is shared.

## Notes
- All data is stored in this browser's localStorage. Passwords are salted and hashed.
- Reminders fire while the app is open in a tab (works offline). Background push needs a server or native app.

## In this version
- Role dashboards: patient (teal), caregiver (violet), doctor/pharmacist (blue).
- Reminder sound plays for 10 seconds and repeats every 5 minutes until the dose is confirmed. Click anywhere once per session so the browser allows sound.
- If a dose is still unconfirmed after 15 minutes, or the emergency button is pressed, linked caregivers get an in-app alert with sound.
- Video calls use free Jitsi Meet rooms (meet.jit.si) and need internet. The callee sees a ringing prompt in Pillora.
- Pharmacy refill orders: send to a pharmacist account, or by WhatsApp to any pharmacy number. Pharmacists update delivery status.
- Cross-account features (alerts, calls, orders) work live between tabs of the same browser. Across different devices they need a backend server.
