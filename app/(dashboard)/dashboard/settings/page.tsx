"use client"

import { useState } from "react"
import { User, Globe, Bell, Shield, Key, Save, Upload, Eye, EyeOff, Github, Twitter, Linkedin } from 'lucide-react'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    // Profile settings
    name: "Ali Tarek",
    email: "ali@alitarek.com",
    phone: "+1-234-567-890",
    location: "Cairo, Egypt",
    bio: "Software Engineer & Tech Educator with 10+ years of experience",
    avatar: "/logo.png",
    
    // Website settings
    siteTitle: "Ali Tarek - Tech Educator & Creator",
    siteDescription: "Teaching code, building things, and sharing knowledge.",
    siteUrl: "https://alitarek.com",
    
    // Social links
    twitter: "https://twitter.com/alitarek",
    linkedin: "https://linkedin.com/in/alitarek",
    github: "https://github.com/alitarek",
    
    // Notification settings
    emailNotifications: true,
    pushNotifications: false,
    weeklyDigest: true,
    projectUpdates: true,
    
    // Security settings
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    twoFactorAuth: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSave = (section: string) => {
    // Simulate save operation
    console.log(`Saving ${section} settings:`, formData)
    // Here you would typically make an API call
  }

  const tabs = [
    { id: "profile", name: "Profile", icon: User },
    { id: "website", name: "Website", icon: Globe },
    { id: "notifications", name: "Notifications", icon: Bell },
    { id: "security", name: "Security", icon: Shield },
    { id: "api", name: "API Keys", icon: Key },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#003a78] to-[#003a78]/90 rounded-xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-blue-100">Manage your account and website preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl  border border-gray-200 p-4">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? "bg-[#003a78] text-white"
                      : "text-gray-600 hover:bg-[#f1f0ec] hover:text-[#003a78]"
                  }`}
                >
                  <tab.icon size={20} className="mr-3" />
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl  border border-gray-200">
            {/* Profile Settings */}
            {activeTab === "profile" && (
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Profile Settings</h2>
                  <button
                    onClick={() => handleSave("profile")}
                    className="flex items-center px-4 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors"
                  >
                    <Save size={16} className="mr-2" />
                    Save Changes
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Avatar Upload */}
                  <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 bg-[#003a78] rounded-full flex items-center justify-center overflow-hidden">
                      <img src={formData.avatar || "/placeholder.svg"} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <button className="flex items-center px-4 py-2 bg-[#fed850] text-[#003a78] rounded-lg hover:bg-[#fed850]/90 transition-colors">
                        <Upload size={16} className="mr-2" />
                        Upload New Photo
                      </button>
                      <p className="text-sm text-gray-500 mt-1">JPG, PNG or GIF. Max size 2MB.</p>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Website Settings */}
            {activeTab === "website" && (
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Website Settings</h2>
                  <button
                    onClick={() => handleSave("website")}
                    className="flex items-center px-4 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors"
                  >
                    <Save size={16} className="mr-2" />
                    Save Changes
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Site Title</label>
                    <input
                      type="text"
                      name="siteTitle"
                      value={formData.siteTitle}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Site Description</label>
                    <textarea
                      name="siteDescription"
                      value={formData.siteDescription}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Site URL</label>
                    <input
                      type="url"
                      name="siteUrl"
                      value={formData.siteUrl}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                    />
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Social Media Links</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Twitter size={20} className="text-blue-500" />
                        <input
                          type="url"
                          name="twitter"
                          value={formData.twitter}
                          onChange={handleInputChange}
                          placeholder="https://twitter.com/username"
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                        />
                      </div>
                      <div className="flex items-center space-x-3">
                        <Linkedin size={20} className="text-blue-600" />
                        <input
                          type="url"
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleInputChange}
                          placeholder="https://linkedin.com/in/username"
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                        />
                      </div>
                      <div className="flex items-center space-x-3">
                        <Github size={20} className="text-gray-800" />
                        <input
                          type="url"
                          name="github"
                          value={formData.github}
                          onChange={handleInputChange}
                          placeholder="https://github.com/username"
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Settings */}
            {activeTab === "notifications" && (
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Notification Preferences</h2>
                  <button
                    onClick={() => handleSave("notifications")}
                    className="flex items-center px-4 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors"
                  >
                    <Save size={16} className="mr-2" />
                    Save Changes
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-[#f1f0ec] rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-900">Email Notifications</h3>
                      <p className="text-sm text-gray-600">Receive notifications via email</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="emailNotifications"
                        checked={formData.emailNotifications}
                        onChange={handleInputChange}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#003a78]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#003a78]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-[#f1f0ec] rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-900">Push Notifications</h3>
                      <p className="text-sm text-gray-600">Receive push notifications in browser</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="pushNotifications"
                        checked={formData.pushNotifications}
                        onChange={handleInputChange}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#003a78]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#003a78]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-[#f1f0ec] rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-900">Weekly Digest</h3>
                      <p className="text-sm text-gray-600">Get a weekly summary of your activity</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="weeklyDigest"
                        checked={formData.weeklyDigest}
                        onChange={handleInputChange}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#003a78]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#003a78]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-[#f1f0ec] rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-900">Project Updates</h3>
                      <p className="text-sm text-gray-600">Notifications about project status changes</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="projectUpdates"
                        checked={formData.projectUpdates}
                        onChange={handleInputChange}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#003a78]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#003a78]"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Security Settings */}
            {activeTab === "security" && (
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Security Settings</h2>
                  <button
                    onClick={() => handleSave("security")}
                    className="flex items-center px-4 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors"
                  >
                    <Save size={16} className="mr-2" />
                    Save Changes
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            name="currentPassword"
                            value={formData.currentPassword}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          >
                            {showPassword ? <EyeOff size={20} className="text-gray-400" /> : <Eye size={20} className="text-gray-400" />}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                        <input
                          type="password"
                          name="newPassword"
                          value={formData.newPassword}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                        <input
                          type="password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-[#f1f0ec] rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-900">Two-Factor Authentication</h3>
                      <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="twoFactorAuth"
                        checked={formData.twoFactorAuth}
                        onChange={handleInputChange}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#003a78]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#003a78]"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* API Keys */}
            {activeTab === "api" && (
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">API Keys</h2>
                  <button className="flex items-center px-4 py-2 bg-[#fed850] text-[#003a78] rounded-lg hover:bg-[#fed850]/90 transition-colors">
                    <Key size={16} className="mr-2" />
                    Generate New Key
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-[#f1f0ec] rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900">Production API Key</h3>
                        <p className="text-sm text-gray-600">Used for production applications</p>
                        <code className="text-xs bg-gray-200 px-2 py-1 rounded mt-2 inline-block">
                          pk_live_••••••••••••••••••••••••••••••••
                        </code>
                      </div>
                      <button className="text-red-600 hover:text-red-800 text-sm font-medium">Revoke</button>
                    </div>
                  </div>

                  <div className="p-4 bg-[#f1f0ec] rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900">Development API Key</h3>
                        <p className="text-sm text-gray-600">Used for testing and development</p>
                        <code className="text-xs bg-gray-200 px-2 py-1 rounded mt-2 inline-block">
                          pk_test_••••••••••••••••••••••••••••••••
                        </code>
                      </div>
                      <button className="text-red-600 hover:text-red-800 text-sm font-medium">Revoke</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}
