export type Question = {
  prompt: string;
  answer: string;
  choices?: (string | number)[];
};

export type Quiz = {
  title: string;
  description?: string;
  difficulty?: number;
  questions: Question[];
};

export const QUIZZES = [
  {
    title: 'us-history',
    description: 'A set of 20 questions on various topics in US history.',
    difficulty: 2,
    questions: [
      {
        prompt: 'Who was the first president of the United States?',
        answer: 'George Washington',
        choices: [
          'George Washington',
          'Thomas Jefferson',
          'Abraham Lincoln',
          'John Adams',
        ],
      },
      {
        prompt: 'What year did the Declaration of Independence get signed?',
        answer: '1776',
        choices: [1776, 1781, 1801, 1765],
      },
      {
        prompt: 'Which event marked the beginning of the American Civil War?',
        answer: 'The Battle of Fort Sumter',
        choices: [
          'The Battle of Gettysburg',
          'The Battle of Fort Sumter',
          'The signing of the Emancipation Proclamation',
          'The attack on Pearl Harbor',
        ],
      },
      {
        prompt:
          'What was the name of the first permanent English settlement in America?',
        answer: 'Jamestown',
        choices: ['Plymouth', 'Jamestown', 'Roanoke', 'New York'],
      },
      {
        prompt: 'Which amendment to the Constitution abolished slavery?',
        answer: '13th Amendment',
        choices: [
          '14th Amendment',
          '13th Amendment',
          '15th Amendment',
          '12th Amendment',
        ],
      },
      {
        prompt: 'Which president issued the Emancipation Proclamation?',
        answer: 'Abraham Lincoln',
        choices: [
          'George Washington',
          'Abraham Lincoln',
          'Andrew Johnson',
          'Ulysses S. Grant',
        ],
      },
      {
        prompt: 'In what year did the United States land on the moon?',
        answer: '1969',
        choices: [1969, 1959, 1975, 1980],
      },
      {
        prompt:
          'Who was the leader of the Confederate States during the Civil War?',
        answer: 'Jefferson Davis',
        choices: [
          'Abraham Lincoln',
          'Robert E. Lee',
          'Jefferson Davis',
          'Stonewall Jackson',
        ],
      },
      {
        prompt:
          'What was the primary purpose of the Lewis and Clark expedition?',
        answer: 'To explore the western territories',
        choices: [
          'To establish trade routes',
          'To explore the western territories',
          'To map the East Coast',
          'To create a railroad',
        ],
      },
      {
        prompt:
          'Which war was fought between the United States and Great Britain in the early 19th century?',
        answer: 'War of 1812',
        choices: [
          'The Revolutionary War',
          'The War of 1812',
          'The Spanish-American War',
          'The Civil War',
        ],
      },
      {
        prompt: "Which famous US document begins with 'We the People'?",
        answer: 'The Constitution',
        choices: [
          'The Declaration of Independence',
          'The Constitution',
          'The Bill of Rights',
          'The Federalist Papers',
        ],
      },
      {
        prompt:
          'Which state was the first to secede from the Union before the Civil War?',
        answer: 'South Carolina',
        choices: ['Virginia', 'Georgia', 'South Carolina', 'Florida'],
      },
      {
        prompt: 'What year did the United States enter World War I?',
        answer: '1917',
        choices: [1917, 1914, 1920, 1912],
      },
      {
        prompt:
          'Who was the first woman to fly solo across the Atlantic Ocean?',
        answer: 'Amelia Earhart',
        choices: [
          'Bessie Coleman',
          'Amelia Earhart',
          'Eleanor Roosevelt',
          'Harriet Tubman',
        ],
      },
      {
        prompt: 'Which president is associated with the New Deal programs?',
        answer: 'Franklin D. Roosevelt',
        choices: [
          'Herbert Hoover',
          'Franklin D. Roosevelt',
          'Harry S. Truman',
          'John F. Kennedy',
        ],
      },
      {
        prompt: 'Which country did the US fight in the Spanish-American War?',
        answer: 'Spain',
        choices: ['Mexico', 'Spain', 'Germany', 'Japan'],
      },
      {
        prompt: 'Who wrote the Declaration of Independence?',
        answer: 'Thomas Jefferson',
        choices: [
          'Benjamin Franklin',
          'John Adams',
          'Thomas Jefferson',
          'Alexander Hamilton',
        ],
      },
      {
        prompt:
          'What year did the United States declare its independence from Britain?',
        answer: '1776',
        choices: [1776, 1783, 1800, 1750],
      },
      {
        prompt:
          'What was the name of the ship that carried the Pilgrims to America in 1620?',
        answer: 'The Mayflower',
        choices: [
          'The Mayflower',
          'The Nina',
          'The Santa Maria',
          'The Discovery',
        ],
      },
      {
        prompt:
          'Which U.S. president issued the order to drop the atomic bombs on Japan?',
        answer: 'Harry S. Truman',
        choices: [
          'Dwight D. Eisenhower',
          'Franklin D. Roosevelt',
          'Harry S. Truman',
          'John F. Kennedy',
        ],
      },
    ],
  },
  {
    title: 'psychology',
    questions: [
      {
        prompt: 'Who is considered the father of psychoanalysis?',
        answer: 'Sigmund Freud',
        choices: ['Carl Jung', 'B.F. Skinner', 'Sigmund Freud', 'Ivan Pavlov'],
      },
      {
        prompt:
          'What is the term for a stimulus that naturally and automatically triggers a response?',
        answer: 'Unconditioned stimulus',
        choices: [
          'Conditioned stimulus',
          'Unconditioned stimulus',
          'Neutral stimulus',
          'Reinforcer',
        ],
      },
      {
        prompt:
          'Which psychological perspective focuses on observable behavior?',
        answer: 'Behaviorism',
        choices: [
          'Cognitive Psychology',
          'Psychoanalysis',
          'Humanistic Psychology',
          'Behaviorism',
        ],
      },
      {
        prompt: 'What is the main focus of humanistic psychology?',
        answer: 'Personal growth and self-actualization',
        choices: [
          'Child development',
          'Unconscious conflicts',
          'Personal growth and self-actualization',
          'Behavior modification',
        ],
      },
      {
        prompt: 'Which psychologist is known for his hierarchy of needs?',
        answer: 'Abraham Maslow',
        choices: [
          'Carl Rogers',
          'Abraham Maslow',
          'Erik Erikson',
          'John Watson',
        ],
      },
      {
        prompt: "What is 'cognitive dissonance'?",
        answer: 'Mental discomfort from holding conflicting beliefs or values',
        choices: [
          'A learning process through reinforcement',
          'Mental discomfort from holding conflicting beliefs or values',
          'A type of memory distortion',
          'The ability to empathize with others',
        ],
      },
      {
        prompt:
          'Which part of the brain is responsible for decision making and problem-solving?',
        answer: 'Prefrontal cortex',
        choices: ['Amygdala', 'Hippocampus', 'Prefrontal cortex', 'Cerebellum'],
      },
      {
        prompt: "What does the term 'operant conditioning' refer to?",
        answer: 'Learning through rewards and punishments',
        choices: [
          'Learning through observation',
          'Learning through rewards and punishments',
          'Learning by association',
          'Learning through cognitive restructuring',
        ],
      },
      {
        prompt: 'Who developed the stages of psychosocial development?',
        answer: 'Erik Erikson',
        choices: [
          'Jean Piaget',
          'Erik Erikson',
          'Lawrence Kohlberg',
          'Lev Vygotsky',
        ],
      },
      {
        prompt: 'What is the focus of positive psychology?',
        answer: 'Enhancing well-being and happiness',
        choices: [
          'Reducing mental illness',
          'Enhancing well-being and happiness',
          'Studying abnormal behavior',
          'Cognitive restructuring',
        ],
      },
      {
        prompt:
          'Which term describes the ability to understand and share the feelings of another?',
        answer: 'Empathy',
        choices: ['Sympathy', 'Empathy', 'Compassion', 'Altruism'],
      },
      {
        prompt: "What is 'confirmation bias'?",
        answer: 'Favoring information that confirms preexisting beliefs',
        choices: [
          'Ignoring conflicting evidence',
          'Favoring information that confirms preexisting beliefs',
          'Overgeneralizing from specific instances',
          'Relying on past experiences exclusively',
        ],
      },
      {
        prompt:
          'Which psychological theory focuses on the influence of social interactions on development?',
        answer: "Vygotsky's Sociocultural Theory",
        choices: [
          "Piaget's Cognitive Development Theory",
          "Freud's Psychoanalytic Theory",
          "Vygotsky's Sociocultural Theory",
          "Skinner's Behaviorism",
        ],
      },
      {
        prompt: "What does the term 'neuroplasticity' refer to?",
        answer: "The brain's ability to change and adapt",
        choices: [
          'Loss of neural function',
          "The brain's ability to change and adapt",
          'Brain damage recovery process',
          'Memory consolidation',
        ],
      },
      {
        prompt: 'Which concept describes learning by watching others?',
        answer: 'Observational learning',
        choices: [
          'Classical conditioning',
          'Operant conditioning',
          'Observational learning',
          'Cognitive mapping',
        ],
      },
      {
        prompt: "Who is known for the concept of 'self-actualization'?",
        answer: 'Abraham Maslow',
        choices: [
          'Carl Rogers',
          'Sigmund Freud',
          'Abraham Maslow',
          'John B. Watson',
        ],
      },
      {
        prompt: "What is the 'placebo effect'?",
        answer: "Improvement due to belief in treatment's effectiveness",
        choices: [
          'Negative reaction to a harmless substance',
          "Improvement due to belief in treatment's effectiveness",
          'Psychological distress from unmet expectations',
          'Enhanced learning from positive reinforcement',
        ],
      },
      {
        prompt:
          'Which part of the brain is primarily associated with emotions?',
        answer: 'Amygdala',
        choices: ['Hippocampus', 'Prefrontal cortex', 'Amygdala', 'Thalamus'],
      },
      {
        prompt:
          'What is the main idea behind cognitive-behavioral therapy (CBT)?',
        answer: 'Changing negative thought patterns to alter behavior',
        choices: [
          'Uncovering unconscious desires',
          'Changing negative thought patterns to alter behavior',
          'Improving emotional intelligence',
          'Reinforcing positive behavior through rewards',
        ],
      },
      {
        prompt: "Who conducted the famous 'Little Albert' experiment?",
        answer: 'John B. Watson',
        choices: [
          'B.F. Skinner',
          'John B. Watson',
          'Ivan Pavlov',
          'Albert Bandura',
        ],
      },
      {
        prompt: "What is 'intrinsic motivation'?",
        answer: 'Motivation driven by internal rewards',
        choices: [
          'Motivation driven by external rewards',
          'Motivation to avoid punishment',
          'Motivation driven by internal rewards',
          'Motivation from peer influence',
        ],
      },
    ],
  },
] as Quiz[];
