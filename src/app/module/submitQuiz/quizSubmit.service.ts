import { Quiz } from "../quiz/quiz.model";
import { QuizSubmission } from "./quizSubmit.model";


export const QuizSubmissionService = {
submitQuiz: async (payload: any) => {
    const { user, module, quiz, answers } = payload;

    // Ensure quiz exists
    const quizData = await Quiz.findById(quiz);
    if (!quizData) throw new Error("Quiz not found");

    // Evaluate answers
    let score = 0;

    const evaluatedAnswers = answers.map((a: any) => {
      const question = quizData.questions.find(
        (q: any) => q._id.toString() === a.questionId
      );

      if (!question) {
        return {
          questionId: a.questionId,
          selectedOption: a.selectedOption,
          isCorrect: false,
        };
      }

      const isCorrect = question.correctAnswer === a.selectedOption;
      if (isCorrect) score += 1;

      return {
        questionId: a.questionId,
        selectedOption: a.selectedOption,
        isCorrect,
      };
    });

    // Save submission
    const submission = await QuizSubmission.create({
      user,
      module,
      quiz,
      answers: evaluatedAnswers,
      score,
    });

    return submission;
  },

getSubmissionsByUser: async (userId: string) => QuizSubmission.find({ user: userId }).populate('module').populate('quiz'),
getSubmissionsByQuiz: async (quizId: string) => QuizSubmission.find({ quiz: quizId }).populate('user').populate('module'),
getSubmission: async (userId: string, quizId: string) => QuizSubmission.findOne({ user: userId, quiz: quizId }).populate('module'),
};
