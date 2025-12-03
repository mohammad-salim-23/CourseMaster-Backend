"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = require("../module/auth/auth.route");
const course_route_1 = require("../module/course/course.route");
const module_route_1 = require("../module/course/module/module.route");
const enrollment_route_1 = require("../module/enrollment/enrollment.route");
const assignment_route_1 = require("../module/assignment/assignment.route");
const quiz_route_1 = require("../module/quiz/quiz.route");
const quizSubmit_route_1 = require("../module/submitQuiz/quizSubmit.route");
const assignmentSubmission_route_1 = require("../module/submittedAssignment/assignmentSubmission.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/auth",
        route: auth_route_1.authRoutes
    },
    {
        path: "/course",
        route: course_route_1.courseRoutes
    },
    {
        path: "/module",
        route: module_route_1.moduleRoute
    },
    {
        path: "/enrollment",
        route: enrollment_route_1.enrollmentRoutes
    },
    {
        path: "/assignment",
        route: assignment_route_1.assignmentRoute
    },
    {
        path: "/quiz",
        route: quiz_route_1.quizRoute
    },
    {
        path: "/quiz-submission",
        route: quizSubmit_route_1.quizSubmitRoute
    },
    {
        path: "/assignment-submission",
        route: assignmentSubmission_route_1.assignmentSubmissionRoute
    }
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
