export interface FaqItem {
  q: string;
  a: string;
}

export const faqs: FaqItem[] = [
  {
    q: "What stack do you use for coding?",
    a: "We use a variety of stacks for coding. There are right tools for the right job. Most of the time, we use Next.js, Tailwind CSS, React, TypeScript, Node.js, PostgreSQL to name a few.",
  },
  {
    q: "How do I reach you for support?",
    a: "From the day we start working on your project, we will add you to a Slack channel. You can reach us on that channel for support.",
  },
  {
    q: "Why should I choose your team for my project?",
    a: "We're passionate about delivering results and building long-term client relationships. Our experience across a wide range of technologies allows us to recommend the best approach for your needs, ensuring quality and reliability from start to finish.",
  },
  {
    q: "How do you communicate progress during a project?",
    a: "Communication is key for us. We provide regular updates and demos, and remain accessible for any questions via Slack or email. Our transparent workflow ensures you're always in the loop.",
  },
  {
    q: "What happens if I need changes after delivery?",
    a: "We offer post-delivery support and can accommodate updates or changes as your needs evolve. Our goal is to ensure your solution remains robust, up-to-date, and aligned with your business objectives.",
  },
  {
    q: "Do you offer custom solutions or only predefined packages?",
    a: "Every client is unique, so we tailor our services to your requirements. Whether you need a custom-built application or help with an existing project, we're flexible and ready to design a solution just for you.",
  },
];
