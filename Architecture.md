# Magic Learning App Architecture

## Overview
A gamified, bilingual (English & Hindi) educational app for early childhood (Nursery to UKG, 2.5 - 6 years). The platform uses Gamification, Voice interactions, and interactive games to ensure maximum retention and a joy-filled learning experience.

## Complete App Architecture
- **Frontend Framework**: React Native (Expo) - represented in this prototype by a React Web PWA.
- **State Management**: Zustand for rapid local state (Coins, Stars, Avatars, Screen flow).
- **Animations**: Framer Motion (Reanimated / Lottie in React Native)
- **Styling**: Tailwind CSS for rapid styling.
- **Backend / DB (Proposed)**: Firebase Cloud Firestore for user profiles, progress syncing, and Cloud Functions for AI logic.

## Feature List (MVP & Future)
1. **Bilingual Foundation**: Toggle between Hindi / English audio tracks.
2. **Avatar System**: Kids choose a unique avatar making it *their* app.
3. **Reward System**:
   - `Coins`: Earned per mini-activity (e.g. 1 coin per letter).
   - `Stars`: Earned per completed module / game (e.g. 1 star for full alphabet).
4. **Learning Modules**:
   - `Alphabets`: Tracing (planned), Voice reading, object relations.
   - `Maths`: Visual counting, interactive selection.
5. **Parent Gateway**: Secured by a generic Math-lock.
   - Dashboard mapping kids' progress.

## Database Schema (Proposed - Firestore)
```json
{
  "users": {
    "userId_123": {
      "parentEmail": "parent@example.com",
      "subscription": "premium", // freemium, premium
      "profiles": [
        {
          "profileId": "prof_abc",
          "name": "Leo",
          "avatarId": 4,
          "coins": 150,
          "stars": 12,
          "progress": {
            "english_abc": 100, // percentage completed
            "math_count": 80
          }
        }
      ]
    }
  }
}
```

## API Structure (Proposed)
- `GET /api/user/:id` -> Fetches parent profile + kids
- `POST /api/progress/:kidId` -> Syncs coins and stars locally to cloud
- `GET /api/reports/:kidId` -> Generates weekly AI summary of kid's learning

## Educational & Child Psychology Strategy
1. **Immediate Rewards**: Young children (2.5-6) require immediate feedback. The visual explosion of confetti paired with "Great Job!" voice creates a dopamine loop.
2. **No Failure States**: We never use scary red buzzers. Instead, the wrong answer gently shakes the button and says "Oops! Try again." Encouragement over punishment.
3. **Big Targets**: Fitts' Law is critical for toddlers. All buttons are massive (`px-8`, `py-4`) and colorful for developing hand-eye coordination.
4. **Agentic Avatar**: Giving kids agency by letting them pick their Avatar creates an immediate bond with the software.

## Tech Stack (This Prototype)
- React 19 + TypeScript
- `zustand` completely handles state.
- `motion` (Framer) handles the bouncy UI.
- `lucide-react` for vector icons.
- Web SpeechSynthesis API for Text-To-Speech.

*Built by Google AI Studio.*
