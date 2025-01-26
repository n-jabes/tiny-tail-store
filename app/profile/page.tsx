'use client';

import Image from 'next/image';
import { Trash2, Upload, Eye, EyeOff, Edit } from 'lucide-react';
import { useState } from 'react';

export default function Page() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  const toggleEditMode = () => setIsEditMode(!isEditMode);

  return (
    <div className="p-6 mx-auto bg-contentBg mb-4 rounded-lg shadow-sm h-max w-full">
      {/* Header */}
      <h1 className="text-xl font-semibold text-text mb-6">My Profile</h1>

      {/* Form */}
      <form>
        {/* Profile Image Section */}
        <div className="flex items-start gap-2 mb-6 border-b border-gray-300 pb-6">
          {/* Profile Image */}
          <div className="relative mr-6">
            <Image
              alt="Profile Image"
              src="/profile.png"
              width={80}
              height={80}
              className="rounded-full"
            />
            <button
              type="button"
              className="absolute bottom-0 right-0 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          {/* Upload Info */}
          <div>
            <h2 className="text-md font-semibold text-text">John Smith</h2>
            <div className="relative">
              <label
                htmlFor="upload"
                className="w-max px-2 flex items-center gap-2 text-sm bg-input text-blue-600 cursor-pointer hover:bg-blue-600 hover:text-white border border-blue-600 p-2 rounded-md"
              >
                <Upload className="w-4 h-4" />
                Upload
              </label>
              <input
                id="upload"
                type="file"
                className="hidden" // Hides the input
                accept=".png, .jpeg, .jpg"
              />
            </div>

            <p className="text-xs text-gray-500 mt-1">
              At least 256x256 PNG or JPG file
            </p>
          </div>

          {/* Edit Button */}
          <button
            type="button"
            onClick={toggleEditMode}
            className="text-gray-600 p-2 rounded-full hover:bg-gray-200 ml-auto"
          >
            <Edit className="w-5 h-5" />
          </button>
        </div>

        {/* Personal Information Section */}
        <div className="space-y-4 mb-8 border-b border-gray-300 pb-6">
          <h3 className="text-mb font-semibold text-text">
            Personal Information
          </h3>
          <div className="w-5/6 grid grid-cols-2 gap-6">
            <div>
              <label
                html-for="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                First name
              </label>
              <input
                id="first-name"
                type="text"
                className="text-sm mt-1 outline-none block w-full p-2 border border-gray-300 bg-input rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                defaultValue="John"
                disabled={!isEditMode}
              />
            </div>
            <div>
              <label
                html-for="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Last name
              </label>
              <input
                id="last-name"
                type="text"
                className="text-sm mt-1 outline-none block w-full p-2 border border-gray-300 bg-input rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                defaultValue="Smith"
                disabled={!isEditMode}
              />
            </div>
          </div>

          {/* address */}
          <div className="w-5/6 grid grid-cols-2 gap-6">
            <div>
              <label
                html-for="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="text-sm mt-1 outline-none block w-full p-2 border border-gray-300 rounded-md bg-input shadow-sm focus:ring-blue-500 focus:border-blue-500"
                defaultValue="john.smith@gmail.com"
                disabled={!isEditMode}
              />
            </div>
            <div>
              <label
                html-for="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                id="address"
                type="text"
                className="text-sm mt-1 outline-none block w-full p-2 border border-gray-300 rounded-md bg-input shadow-sm focus:ring-blue-500 focus:border-blue-500"
                defaultValue="567 Pine Street, Metropolis, USA"
                disabled={!isEditMode}
              />
            </div>
          </div>
        </div>

        {/* Password Change Section */}
        <div className="space-y-4 mb-8">
          <h3 className="text-md font-semibold text-text">Password Change</h3>
          <div className="w-5/6 grid grid-cols-2 gap-6">
            <div className="relative">
              <label
                html-for="current-password"
                className="block text-sm font-medium text-gray-700"
              >
                Current password
              </label>
              <input
                id="current-password"
                type={passwordVisible ? 'text' : 'password'}
                className="text-sm mt-1 outline-none block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-input focus:ring-blue-500 focus:border-blue-500"
                placeholder="**********"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-8"
              >
                {passwordVisible ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            <div className="relative">
              <label
                html-for="new-password"
                className="block text-sm font-medium text-gray-700"
              >
                New password
              </label>
              <input
                id="new-password"
                type={passwordVisible ? 'text' : 'password'}
                className="text-sm mt-1 outline-none block w-full p-2 border border-gray-300 rounded-md bg-input shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="**********"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-8"
              >
                {passwordVisible ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-4 mt-8">
          <button
            type="button"
            className="text-sm px-16 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="text-sm px-16 py-2 bg-button-bg text-white rounded-md hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
