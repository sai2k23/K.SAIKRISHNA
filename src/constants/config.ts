type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
  // feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "KOLLETI SAI KRISHNA — FULL Stack Developer",
    fullName: "SAI KRISHNA",
    email: "saikrishnakolleti@gmail.com",
  },
  hero: {
    name: " Sai Krishna",
    p: ["Building seamless user experiences from front to back"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I am a passionate full-stack developer with hands-on experience in web development, particularly in JavaScript and React.js. 
               My expertise extends to the MERN stack, where I’ve built user-friendly applications that solve real-world problems. 
               I thrive on collaboration and continuously seek to enhance my skills while delivering efficient and scalable solutions. 
               Bridging the gap between design and functionality!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
  //  feedbacks: {
  //    p: "What others say",
  //    h2: "Testimonials.",
  //  },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
