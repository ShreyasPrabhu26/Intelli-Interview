import { serial, text, pgTable, varchar } from "drizzle-orm/pg-core";

export const MonkInterview = pgTable("mockInterview", {
    id: serial('id').primaryKey(),
    jsonMockResp: text('jsonMockResponse').notNull(),
    jobPosition: varchar('jobPosition').notNull(),
    jobDescription: varchar('jobDescription').notNull(),
    jobExperience: varchar('jobExperience').notNull(),
    createdBy: varchar('createdBy').notNull(),
    createdAt: varchar('createdAt').notNull(),
    mockId: varchar('mockId').notNull(),
})