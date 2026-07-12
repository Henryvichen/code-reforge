# Product Specification

Project Name: Code Reforge

Version: 0.1
Status: Planning

---

# Vision Statement

> Every quest rebuilds the town.
> Every solution rebuilds you.

The goal of this project is to create an RPG-inspired coding experience that helps developers rebuild confidence after spending time away from programming.

Rather than feeling like an online course or interview preparation platform, the experience should feel like returning to a familiar world where each solved problem restores both the kingdom and the player's confidence.

Programming is not the subject.

Programming is the mechanic.

---

# Executive Summary

Many developers eventually stop coding for months or even years.

Returning often feels intimidating because they no longer know where to begin or how much they remember.

This project aims to transform that experience into something enjoyable by combining short programming exercises with meaningful progression inside a fantasy-inspired world.

---

# Problem Statement

Existing learning platforms generally focus on one of two things:

- Teaching complete beginners
- Preparing developers for technical interviews

Neither focuses on helping developers regain confidence after stepping away from programming.

This application fills that gap.

---

# Target Audience

Primary

- Junior Software Engineers
- Bootcamp Graduates
- Career Changers
- Developers returning after a long break

Secondary

- Students learning Python
- Developers looking for short daily practice

---

# Core Principles

## Every quest rebuilds the town.

Player progress should always have visible impact on the world.

---

## Every solution rebuilds the player.

The game should reward confidence rather than perfection.

---

## Learning should feel meaningful.

Players solve problems for villagers rather than completing abstract lessons.

---

## Progress should always be visible.

Buildings appear.

Villagers move in.

The town slowly comes back to life.

---

## Small wins create momentum.

The first quest should feel achievable.

The goal is to encourage players to continue.

---

# Core Gameplay Loop

Open Application

↓

Visit Tavern

↓

Read Quest Board

↓

Accept Quest

↓

Solve Programming Challenge

↓

Earn Gold

↓

Improve Town

↓

Unlock New Quest Givers

↓

Repeat

---

# Setting

Long ago, the kingdom was filled with talented engineers.

Libraries were full.

The workshops never rested.

Over time, knowledge slowly disappeared.

Buildings became abandoned.

The Guild now searches for someone willing to restore what was lost.

Players gradually rebuild the town through completed quests.

---

# NPC Roles

Guild Master

- Tutorial
- Story progression
- Encouragement

Merchant

- Hint Shop
- Future cosmetics

Blacksmith

- Functions
- Implementation quests

Librarian

- Reading code
- Understanding existing code

Alchemist

- Debugging

Mayor

- Larger multi-step quests

Mage

- Advanced programming concepts (future)

---

# Quest Types

Warmup

- Fill in the blank

Repair

- Find and fix bugs

Explain

- Predict program output

Build

- Write a small function

Future

- Refactoring
- Mini projects
- Debugging sessions

---

# Reward System

Players earn

- Gold
- Confidence
- Story Progress
- Town Progress

Gold purchases hints.

Confidence unlocks more difficult quests.

The town evolves visually as progress is made.

---

# Technical Stack

Frontend

- React
- TypeScript

Backend

- Python
- FastAPI

Persistence

- LocalStorage

Future

- Database
- Additional programming languages
- AI-powered hints

---

# AI Collaboration Strategy

Human Responsibilities

- Product vision
- Story
- Learning progression
- Quest design
- Engineering decisions
- Final code review

AI Responsibilities

- Project scaffolding
- Boilerplate
- React components
- Backend endpoints
- Styling
- Refactoring
- Documentation
- Testing assistance

Every AI-generated change should be reviewed and understood before being merged.

---

# Version 1 Scope

Included

- Welcome screen
- Intro dialogue
- Tavern
- Quest Board
- Merchant
- Hint system
- Gold
- Confidence meter
- One small town
- Local save data
- Approximately 20 handcrafted Python quests

Not Included

- Multiplayer
- Cloud saves
- AI tutor
- Python execution
- Multiple programming languages
- Daily quests

---

# Golden Path

The first player experience should establish the core purpose of Code Reforge within the first ten minutes.

1. Player opens Code Reforge.
2. The player is asked how long it has been since they last coded.
3. The Guild Master asks what areas feel the rustiest.
4. The player is introduced to the forgotten town.
5. The player enters the Tavern.
6. The Quest Board presents a single beginner quest.
7. The player completes a short Python challenge.
8. The completed quest visibly changes the town.
9. The Merchant introduces the hint system.
10. The player sees the next town unlock and is encouraged to continue.

The first quest should be intentionally approachable.

The town's connection to the player's coding confidence should be shown through progression rather than directly explained.

---

# Engineering Principles

- Ship small increments.
- Keep the application playable after every commit.
- Understand every line before merging AI-generated code.
- Prioritize player experience over technical complexity.
- Prevent feature creep by protecting the core vision.

---

# Future Ideas

Potential ideas that are intentionally outside Version 1.

- Unity / C# quest line
- Daily quests
- Additional kingdoms
- More NPCs
- Cosmetic customization
- AI-generated hints
- Additional programming languages
- Seasonal events

These ideas should only be considered after Version 1 is complete.