'use client'

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaUserTie, FaCode, FaUsers } from 'react-icons/fa';

export default function Team() {
  const teamMembers = [
    {
      name: "Abdullahi Abdi",
      role: "Team Lead & Product/Project Manager",
      image: "/images/abdi.jpeg",
      bio: "Abdullahi is a visionary leader with a passion for blockchain innovation. With a background in computer science and business management, he drives W3Zetech's strategic direction and ensures seamless project execution. Abdullahi's expertise in product development and his ability to bridge technical and business aspects make him an invaluable asset to the team. He is committed to fostering an environment of continuous learning and innovation within W3Zetech.",
      icon: FaUserTie,
      color: "from-blue-500 to-purple-500",
      twitter: "https://x.com/Abdullahi_Ab_di",
      linkedin: "https://www.linkedin.com/in/abdullahi-abdi-4bb964295/",
      github: "https://github.com/abdul-abdi"
    },
    {
      name: "Fadhil Mulinya",
      role: "Project Manager, Instructor & Blockchain Developer",
      image: "/images/fadhil.jpeg",
      bio: "Fadhil is a blockchain expert and educator who brings hands-on experience to W3Zetech. With a strong background in software engineering and blockchain development, he bridges the gap between theory and real-world applications. Fadhil's passion for teaching and his deep understanding of blockchain technologies enable him to create engaging and practical learning experiences for W3Zetech members. He is dedicated to empowering students with the skills needed to thrive in the rapidly evolving blockchain industry.",
      icon: FaCode,
      color: "from-green-400 to-blue-500",
      twitter: "https://x.com/mulinyafadhil",
      linkedin: "https://www.linkedin.com/in/fadhil-mulinya-35464b238/",
      github: "https://github.com/FadhilMulinya"
    },
    {
      name: "Nelly Njeri",
      role: "Community Lead & Rust Blockchain Developer",
      image: "/images/nelly.jpeg",
      bio: "Nelly is a Rust enthusiast and community builder who fosters a vibrant learning environment at W3Zetech. With her expertise in Rust programming and blockchain development, she drives the technical initiatives of the club. Nelly's ability to simplify complex concepts and her commitment to inclusivity make her an exceptional mentor. She is passionate about creating opportunities for underrepresented groups in the blockchain space and continuously works on expanding W3Zetech's network and impact.",
      icon: FaUsers,
      color: "from-yellow-400 to-orange-500",
      twitter: "https://x.com/nellycyberpro",
      linkedin: "https://www.linkedin.com/in/nelly-njeri-ab5b4b280/",
      github: "https://github.com/wamimi?tab=overview&from=2024-10-01&to=2024-10-07"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <div className="w-full max-w-7xl mx-auto px-6 z-10">
        <motion.div 
          className="bg-background bg-opacity-80 backdrop-blur-lg rounded-xl shadow-2xl p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Founding Team
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className={`bg-background bg-opacity-50 p-6 rounded-lg shadow-lg relative overflow-hidden transition-all duration-300 bg-gradient-to-br ${member.color} border border-accent-1`}
                variants={itemVariants}
              >
                <motion.div 
                  className="absolute top-0 right-0 text-white opacity-10 transition-opacity duration-300"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <member.icon size={120} />
                </motion.div>
                <div className="relative z-10">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg" 
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/images/default-avatar.png';
                    }}
                  />
                  <h3 className="text-2xl font-semibold mb-2 text-white text-center">{member.name}</h3>
                  <p className="text-white text-opacity-80 mb-4 text-center">{member.role}</p>
                  <p className="text-white text-opacity-90 mb-4 text-sm">
                    {member.bio}
                  </p>
                  <div className="flex justify-center space-x-4 mt-4">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-2 transition-colors">
                      <FaLinkedin size={24} />
                    </a>
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-2 transition-colors">
                      <FaGithub size={24} />
                    </a>
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-2 transition-colors">
                      <FaTwitter size={24} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent-3 opacity-10"></div>
    </section>
  );
}