import mongoose from 'mongoose';
import { Activity } from '../models/Activity.js';
import { LeaderboardEntry } from '../models/LeaderboardEntry.js';
import { Team } from '../models/Team.js';
import { User } from '../models/User.js';
import { Workout } from '../models/Workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await Team.insertMany([
      {
        _id: 'team-summit-squad',
        name: 'Summit Squad',
        motto: 'Climb every week together',
        city: 'Seattle, WA',
        memberCount: 3,
      },
      {
        _id: 'team-harbor-hustle',
        name: 'Harbor Hustle',
        motto: 'Steady miles, strong tides',
        city: 'Boston, MA',
        memberCount: 2,
      },
    ]);

    await User.insertMany([
      {
        _id: 'user-ava-martinez',
        username: 'ava_miles',
        displayName: 'Ava Martinez',
        email: 'ava.martinez@example.com',
        age: 31,
        teamId: 'team-summit-squad',
        fitnessGoal: 'Improve 10K pace',
      },
      {
        _id: 'user-liam-chen',
        username: 'liam_lifts',
        displayName: 'Liam Chen',
        email: 'liam.chen@example.com',
        age: 28,
        teamId: 'team-summit-squad',
        fitnessGoal: 'Build full-body strength',
      },
      {
        _id: 'user-maya-patel',
        username: 'maya_moves',
        displayName: 'Maya Patel',
        email: 'maya.patel@example.com',
        age: 35,
        teamId: 'team-harbor-hustle',
        fitnessGoal: 'Increase weekly activity consistency',
      },
    ]);

    await Activity.insertMany([
      {
        _id: 'activity-ava-5k-run',
        userId: 'user-ava-martinez',
        type: 'run',
        durationMinutes: 29,
        caloriesBurned: 330,
        distanceMiles: 3.2,
        completedAt: new Date('2026-10-05T13:30:00.000Z'),
      },
      {
        _id: 'activity-liam-strength',
        userId: 'user-liam-chen',
        type: 'strength training',
        durationMinutes: 48,
        caloriesBurned: 410,
        distanceMiles: 0,
        completedAt: new Date('2026-10-06T22:15:00.000Z'),
      },
      {
        _id: 'activity-maya-cycle',
        userId: 'user-maya-patel',
        type: 'cycling',
        durationMinutes: 42,
        caloriesBurned: 380,
        distanceMiles: 9.8,
        completedAt: new Date('2026-10-07T11:00:00.000Z'),
      },
    ]);

    await LeaderboardEntry.insertMany([
      {
        _id: 'leaderboard-ava',
        rank: 1,
        userId: 'user-ava-martinez',
        displayName: 'Ava Martinez',
        points: 1840,
        weeklyCalories: 2210,
      },
      {
        _id: 'leaderboard-liam',
        rank: 2,
        userId: 'user-liam-chen',
        displayName: 'Liam Chen',
        points: 1715,
        weeklyCalories: 1980,
      },
      {
        _id: 'leaderboard-maya',
        rank: 3,
        userId: 'user-maya-patel',
        displayName: 'Maya Patel',
        points: 1650,
        weeklyCalories: 1875,
      },
    ]);

    await Workout.insertMany([
      {
        _id: 'workout-tempo-intervals',
        title: 'Tempo Interval Run',
        focus: 'cardio endurance',
        difficulty: 'intermediate',
        durationMinutes: 35,
        recommendedFor: ['Improve 10K pace', 'Increase weekly activity consistency'],
      },
      {
        _id: 'workout-core-strength',
        title: 'Core and Strength Circuit',
        focus: 'functional strength',
        difficulty: 'beginner',
        durationMinutes: 28,
        recommendedFor: ['Build full-body strength'],
      },
      {
        _id: 'workout-recovery-flow',
        title: 'Recovery Mobility Flow',
        focus: 'mobility',
        difficulty: 'beginner',
        durationMinutes: 20,
        recommendedFor: ['Improve 10K pace', 'Build full-body strength'],
      },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
