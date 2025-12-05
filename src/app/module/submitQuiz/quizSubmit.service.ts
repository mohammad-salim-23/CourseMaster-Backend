import { Quiz } from "../quiz/quiz.model";
import { QuizSubmission } from "./quizSubmit.model";


export const QuizSubmissionService = {
submitQuiz: async (payload: any) => {

    const { quizId, moduleId, user, answers } = payload;

    const quiz = await Quiz.findById(quizId);
    console.log(">>>",quiz);
    if (!quiz) throw new Error("Quiz not found");

    // Calculate score + include correctAnswer
    let score = 0;
    const evaluatedAnswers = answers.map((a: any) => {
      const q = quiz.questions.find((qq: any) => qq.question === a.question);
        const correctIndex = Number(q?.correctAnswer) - 1;
       const correctAnswer = q?.options[correctIndex];
      const isCorrect = correctAnswer === a.selectedOption;

      if (isCorrect) score += 1;

      return {
        question: a.question,
        selectedOption: a.selectedOption,
        isCorrect,
        correctAnswer,
      };
    });

    // Save submission
    const submission = await QuizSubmission.create({
      user,
      module: moduleId,
      quiz: quizId,
      answers: evaluatedAnswers,
      score,
    });

    return submission;
  },
//get all submission
getAllSubmissions: async () => {
  return QuizSubmission.find()
    .populate("user")
    .populate("module")
    .populate("quiz");
},

getSubmissionsByUser: async (userId: string) => QuizSubmission.find({ user: userId }).populate('module').populate('quiz'),
getSubmissionsByQuiz: async (quizId: string) => QuizSubmission.find({ quiz: quizId }).populate('user').populate('module'),
getSubmission: async (userId: string, quizId: string) => QuizSubmission.findOne({ user: userId, quiz: quizId }).populate('module'),
};
