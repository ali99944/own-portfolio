'use client'

import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { Briefcase, Mail, MessageCircle, Code, Zap, Trophy, Target, Star, TrendingUp, Lightbulb, Users, Puzzle, GraduationCap, ClipboardIcon } from 'lucide-react'
import {Select} from '@/components/ui/select'

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', projectDetails: '', service: '' })
  const [successMessage, setSuccessMessage] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setSuccessMessage(true)
      setFormData({ name: '', email: '', message: '', projectDetails: '', service: '' })
      setTimeout(() => setSuccessMessage(false), 3000) // Hide after 3 seconds
    }, 500) // Simulate API delay
  }

  const services = [
    { value: 'web', label: 'Web Development' },
    { value: 'mobile', label: 'Mobile App Development' },
    { value: 'systems', label: 'Systems Creation' },
  ]

  return (
    <div className={`min-h-screen  transition-colors duration-300 font-sans`}>
      <Head>
        <title>Ali Tarek - Tech Educator & Creator</title>
        <meta
          name="description"
          content="Ali Tarek's personal website - Teaching code, building things, and sharing knowledge."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Creative Hero Section with Buttons and Greeting */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-12 gap-4 items-center justify-center bg-gradient-to-br from-[#003a78] to-[#003a78]/90 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden pt-24 pb-16">
        <div className="col-span-1 md:col-span-6 text-center max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-white dark:text-blue-400 mb-4 animate-fade-in">
            Hello, I am Ali, Software Engineer
          </h2>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white dark:text-blue-400 leading-tight animate-fade-in">
            I TEACH CODE.
            <br />I BUILD THINGS.
          </h1>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <Link
              href="#contact"
              className="px-6 py-2 bg-white text-[#003a78] font-semibold rounded-lg hover:bg-gray-200 transition"
            >
              Got a project?
            </Link>
            <Link
              href="/cv.pdf"
              className="px-6 py-2 bg-[#fed850] text-black font-semibold rounded-lg hover:bg-[#fed850]/90 transition"
            >
              CV
            </Link>
            <Link
              href="/projects"
              className="px-6 py-2 bg-[#fed850] text-black font-semibold rounded-lg hover:bg-[#fed850]/90 transition"
            >
              PROJECTS
            </Link>
            <Link
              href="/projects"
              className="px-6 py-2 bg-[#fed850] text-black font-semibold rounded-lg hover:bg-[#fed850]/90 transition"
            >
              BLOG
            </Link>
          </div>
        </div>
        <div className="col-span-1 md:col-span-6 flex justify-center animate-slide-up">
          <img
            src="/logo.png"
            alt="Ali Tarek"
            className="w-60 h-60 rounded-full object-cover border-white bg-white p-4 shadow-2xl"
          />
        </div>
      </section>

      {/* Rich About Section with Numbers */}
      <section id="about" className="py-16 bg-[#f1f0ec] dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">ABOUT</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                I&apos;m Ali Tarek, a passionate tech educator and creator with over 10 years of experience in the industry.
                I specialize in breaking down complex coding concepts into actionable lessons, empowering learners to
                build software that makes an impact. My journey began with a love for problem-solving, which evolved
                into a mission to inspire the next generation of developers.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Beyond teaching, I&apos;m an active open-source contributor and a mentor, helping individuals and teams turn
                ideas into reality. Welcome to my digital space, where innovation meets education!
              </p>
            </div>
            <div className="flex justify-center animate-slide-up">
              <img
                src="/logo.png"
                alt="Ali Tarek"
                className="w-60 h-60 rounded-full object-cover border-white"
              />
            </div>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-[#003a78] text-[#fed850] rounded-lg shadow">
              <h3 className="text-3xl font-bold">10+</h3>
              <p className="text-sm font-semibold">Years of Experience</p>
            </div>
            <div className="text-center p-4 bg-[#003a78] text-[#fed850] rounded-lg shadow">
              <h3 className="text-3xl font-bold">50+</h3>
              <p className="text-sm font-semibold">Projects Completed</p>
            </div>
            <div className="text-center p-4 bg-[#003a78] text-[#fed850] rounded-lg shadow">
              <h3 className="text-3xl font-bold">1000+</h3>
              <p className="text-sm font-semibold">Students Mentored</p>
            </div>
            <div className="text-center p-4 bg-[#003a78] text-[#fed850] rounded-lg shadow">
              <h3 className="text-3xl font-bold">20+</h3>
              <p className="text-sm font-semibold">Open-Source Contributions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles, Series, Projects, Business Section */}
      <section id="content-types" className="py-16 bg-[#f1f0ec] dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">EXPLORE MY WORK</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-[#003a78] text-white rounded-lg flex items-start">
              <TrendingUp size={32} className="mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Articles</h3>
                <p className="mt-2 text-gray-200">Insightful tech articles to expand your knowledge.</p>
                <Link href="/articles" className="mt-4 text-[#fed850] hover:underline flex justify-end">
                  View Articles
                </Link>
              </div>
            </div>
            <div className="p-4 bg-[#003a78] text-white rounded-lg flex items-start">
              <TrendingUp size={32} className="mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Series</h3>
                <p className="mt-2 text-gray-200">In-depth series on coding and development topics.</p>
                <Link href="/series" className="mt-4 text-[#fed850] hover:underline flex justify-end">
                  View Series
                </Link>
              </div>
            </div>
            <div className="p-4 bg-[#003a78] text-white rounded-lg flex items-start">
              <Briefcase size={32} className="mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Projects</h3>
                <p className="mt-2 text-gray-200">Showcasing my latest coding projects.</p>
                <Link href="/projects" className="mt-4 text-[#fed850] hover:underline flex justify-end">
                  View Projects
                </Link>
              </div>
            </div>
            <div className="p-4 bg-[#003a78] text-white rounded-lg flex items-start">
              <Trophy size={32} className="mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Business</h3>
                <p className="mt-2 text-gray-200">Business solutions and consulting services.</p>
                <Link href="/business" className="mt-4 text-[#fed850] hover:underline flex justify-end">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with Creative Design */}
      <section id="projects" className="py-16 bg-[#f1f0ec] dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">PROJECTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#003a78] text-white rounded-full flex items-center justify-center mr-4 animate-pulse-slow">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Open-Source Charting Library</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                Plot interactive and customizable charts with ease using this powerful library designed for developers.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#003a78] text-white rounded-full flex items-center justify-center mr-4 animate-pulse-slow">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Code Learning Platform</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                Interactive platform for coding education with hands-on exercises and real-time feedback.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#003a78] text-white rounded-full flex items-center justify-center mr-4 animate-pulse-slow">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Mobile Dev App</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                Cross-platform mobile development tool with rich features and seamless integration.
              </p>
            </div>
          </div>
          <Link href="#" className="text-[#003a78] hover:underline mt-6 inline-block">
            View all projects
          </Link>
        </div>
      </section>

      {/* Education Section with Creative Design */}
      <section id="education" className="py-16 bg-[#f1f0ec] dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">EDUCATION</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Computer Science Degree</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">University of Technology, 2010-2014</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Focused on software engineering and algorithm design with a strong foundation in coding principles.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Advanced Coding Bootcamp</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Tech Academy, 2015</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Specialized training in web development and frameworks, enhancing practical coding skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section with Modern Design */}
      <section
        id="skills"
        className="py-20 bg-gradient-to-br from-[#003a78] to-[#003a78]/90 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              SKILLS & EXPERTISE
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Crafting digital experiences with cutting-edge technologies and proven methodologies
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#fed850] to-yellow-400 rounded-2xl flex items-center justify-center mr-4">
                    <Code size={32} className="text-[#003a78]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Programming Languages</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { name: 'JavaScript', level: 95 },
                    { name: 'Python', level: 90 },
                    { name: 'TypeScript', level: 88 },
                    { name: 'C++', level: 80 },
                    { name: 'Go Lang', level: 75 },
                    { name: 'Rust', level: 70 },
                    { name: 'Kotlin', level: 65 },
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-[#fed850] font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-[#fed850] to-yellow-400 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Frameworks & Tools */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#fed850] to-yellow-400 rounded-2xl flex items-center justify-center mr-4">
                    <Zap size={32} className="text-[#003a78]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Frameworks & Tools</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {['React', 'Node.js', 'Next.js', 'Tailwind CSS', 'Git', 'Docker', 'AWS', 'MongoDB'].map(
                    (tool) => (
                      <div
                        key={tool}
                        className="flex items-center space-x-2 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                      >
                        <Star size={16} className="text-[#fed850]" />
                        <span className="text-white font-medium">{tool}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
            {/* Soft Skills */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#fed850] to-yellow-400 rounded-2xl flex items-center justify-center mr-4">
                    <Target size={32} className="text-[#003a78]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Soft Skills</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { skill: 'Mentoring & Teaching', icon: GraduationCap },
                    { skill: 'Problem-Solving', icon: Puzzle },
                    { skill: 'Team Leadership', icon: Users },
                    { skill: 'Communication', icon: MessageCircle },
                    { skill: 'Project Management', icon: ClipboardIcon },
                    { skill: 'Innovation', icon: Lightbulb },
                  ].map((item) => (
                    <div
                      key={item.skill}
                      className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <item.icon size={24} className="text-[#fed850]" />
                      <span className="text-white font-medium">{item.skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-16 bg-[#f1f0ec] dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">TECHNOLOGIES I USE</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['JavaScript', 'Python', 'TypeScript', 'React', 'Node.js', 'Next.js', 'Tailwind CSS', 'Git', 'Docker', 'AWS', 'MongoDB', 'GraphQL'].map((tech) => (
              <div key={tech} className="p-4 bg-white dark:bg-gray-800 rounded-lg text-center hover:bg-[#fed850] hover:text-[#003a78] transition-colors">
                <span className="text-lg font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-[#f1f0ec] dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">SERVICES I PROVIDE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 ">
              <Code size={32} className="text-[#003a78] mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Web Development</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Building responsive, secure, and scalable websites.</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 ">
              <TrendingUp size={32} className="text-[#003a78] mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Mobile App Development</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Developing native and cross-platform mobile apps.</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 ">
              <Star size={32} className="text-[#003a78] mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Systems Creation</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Designing and implementing custom systems and infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with WhatsApp, Social Media, and Contact Form */}
      <section id="contact" className="py-16 bg-[#f1f0ec] dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
            <Mail className="mr-2 text-[#003a78]" /> CONTACT
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Got a question or want to collaborate? Reach out!
          </p>
          <div className="flex justify-center space-x-4 mb-6">
            <Link
              target='_blank'
              href="mailto:ali@alitarek.com"
              className="inline-flex items-center px-4 py-2 bg-[#003a78] text-[#fed850] rounded-lg hover:bg-[#003a78]/90 transition"
            >
              <Mail className="mr-2" size={16} /> Email
            </Link>
            <Link
              target='_blank'
              href="https://wa.me/1234567890"
              className="inline-flex items-center px-4 py-2 bg-[#003a78] text-[#fed850] rounded-lg hover:bg-[#003a78]/90 transition"
            >
              <MessageCircle className="mr-2" size={16} /> WhatsApp
            </Link>
          </div>
          <div className="text-gray-600 dark:text-gray-300 mb-6">
            <p>Phone: +1-234-567-890</p>
            <p>
              Social Media:
              <Link href="https://twitter.com/alitarek" className="text-[#003a78] hover:underline ml-2">
                Twitter
              </Link>{' '}
              |
              <Link href="https://linkedin.com/in/alitarek" className="text-[#003a78] hover:underline ml-2">
                LinkedIn
              </Link>{' '}
              |
              <Link href="https://github.com/alitarek" className="text-[#003a78] hover:underline ml-2">
                GitHub
              </Link>
            </p>
          </div>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-white p-2 border border-gray-200 dark:border-gray-700 rounded-lg"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full bg-white p-2 border border-gray-200 dark:border-gray-700 rounded-lg"
            />
            <div className="relative">
              <Select
                value={formData.service}
                onChange={(e) => {
                  setFormData((prev) => {
                    return {
                      ...prev,
                      service: e
                    }
                  })
                }}
                options={services}
              />
                
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full bg-white p-2 border border-gray-200 dark:border-gray-700 rounded-lg h-24"
            ></textarea>
            <textarea
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              placeholder="Project Details"
              className="w-full bg-white p-2 border border-gray-200 dark:border-gray-700 rounded-lg h-48"
            ></textarea>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-[#003a78] text-[#fed850] cursor-pointer rounded-lg hover:bg-[#003a78]/90 transition"
            >
              Submit Project
            </button>
            {successMessage && (
              <div className="mt-4 p-4 bg-green-200 dark:bg-green-900 text-green-800 font-semibold dark:text-green-200 rounded-lg text-center animate-fade-in">
                Thank you! Your message has been sent successfully.
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  )
}