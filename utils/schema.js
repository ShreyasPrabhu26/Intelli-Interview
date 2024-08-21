import { serial, text, pgTable, varchar } from "drizzle-orm/pg-core";

export const MockInterview = pgTable("mockInterview", {
    id: serial('id').primaryKey(),
    mockId: varchar('mockId').notNull(),
    jsonMockResp: text('jsonMockResponse').notNull(),
    jobPosition: varchar('jobPosition').notNull(),
    jobDescription: varchar('jobDescription').notNull(),
    jobExperience: varchar('jobExperience').notNull(),
    createdBy: varchar('createdBy').notNull(),
    createdAt: varchar('createdAt').notNull(),
})

export const UserAnswer = pgTable('userAnswer', {
    id: serial('id').primaryKey(),
    mockIdRef: varchar('mockId').notNull(),
    userEmail: varchar('userEmail'),
    question: varchar('question').notNull(),
    correctAnswer: varchar('correctAnswer'),
    userAnswer: varchar('userAnswer'),
    feedback: varchar('feedback'),
    rating: varchar('rating'),
    createdAt: varchar('createdAt').notNull(),
})