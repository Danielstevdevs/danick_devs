import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: Code2,
      title: 'Technical Skills',
      description: 'Passionate about coding and staying current with the latest technologies.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always exploring new ideas and creative solutions to complex problems.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Strong team player with excellent communication skills.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm a tech enthusiast with a passion for creating innovative solutions.
            I'm constantly learning and growing in the ever-evolving tech landscape,
            and I'm excited about new opportunities to make an impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <card.icon className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;