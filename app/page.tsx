"use client";

import { useState, useEffect } from "react";
import { Eye, EyeOff, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
// import { LoginFormData, loginSchema } from "@/lib/validationSchemas";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
// import ForgotPasswordModal from "./ForgotPasswordModal";

export default function EmployerLoginForm() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [showPassword, setShowPassword] = useState(false);
	const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
	const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
	const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});

  const [isLoading, setIsLoading] = useState(false)

	const router = useRouter();

  const handleSubmit = () =>{
    setIsLoading(true)
    router.replace('/dashboard/admin-post/job')
  }
	// Validate entire form for submission

	return (
		<main className="w-full grid grid-cols-[40%_60%]">
			<div className="p-[62px] bg-gradient-to-b from-[#7893FF] to-[#2441B5] h-screen">
				{/* <AfricaSkillzLogoIcon /> */}
				<div className=" relative">
					<div className="relative w-[352px] h-[409px] rounded-[20px] mt-[150px] m-auto">
						<Image src="/employer-signup.png" fill alt="sign up avatar" />
					</div>

					<div className="p-4 rounded-2xl w-fit shadow-lg absolute top-[55%] -left-5 bg-white">
						<svg
							width="40"
							height="40"
							viewBox="0 0 40 40"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								opacity="0.2"
								d="M36.2444 12.6453L34.0179 31.3953C33.9801 31.7002 33.8322 31.9808 33.602 32.1843C33.3718 32.3878 33.0751 32.5 32.7679 32.5H7.24285C6.93561 32.5 6.63895 32.3878 6.40872 32.1843C6.1785 31.9808 6.03059 31.7002 5.99285 31.3953L3.76629 12.6453C3.7457 12.4694 3.76273 12.2911 3.81625 12.1222C3.86978 11.9534 3.95859 11.7978 4.07678 11.6659C4.19497 11.534 4.33986 11.4287 4.50183 11.357C4.6638 11.2852 4.83916 11.2488 5.01629 11.25H34.9913C35.1687 11.2483 35.3444 11.2845 35.5067 11.356C35.6691 11.4275 35.8144 11.5327 35.9329 11.6647C36.0514 11.7967 36.1405 11.9524 36.1942 12.1215C36.2479 12.2905 36.265 12.4691 36.2444 12.6453Z"
								fill="#335CFF"
							/>
							<path
								d="M36.8748 10.8438C36.6378 10.5777 36.347 10.3649 36.0216 10.2194C35.6962 10.074 35.3437 9.99919 34.9873 10H27.4998C27.4998 8.01088 26.7097 6.10322 25.3031 4.6967C23.8966 3.29018 21.989 2.5 19.9998 2.5C18.0107 2.5 16.1031 3.29018 14.6965 4.6967C13.29 6.10322 12.4998 8.01088 12.4998 10H5.01234C4.65806 10.001 4.30796 10.0766 3.98489 10.222C3.66181 10.3674 3.37301 10.5792 3.13734 10.8438C2.90363 11.1073 2.72826 11.4172 2.6227 11.7533C2.51715 12.0893 2.4838 12.4439 2.52484 12.7937L4.75297 31.5438C4.82523 32.1547 5.1202 32.7175 5.58145 33.1245C6.04269 33.5316 6.63781 33.7543 7.25296 33.75H32.7608C33.3759 33.7543 33.9711 33.5316 34.4323 33.1245C34.8935 32.7175 35.1885 32.1547 35.2608 31.5438L37.4889 12.7937C37.5297 12.4438 37.4961 12.0892 37.3903 11.7531C37.2845 11.4171 37.1088 11.1072 36.8748 10.8438ZM19.9998 5C21.3259 5 22.5977 5.52678 23.5354 6.46447C24.4731 7.40215 24.9998 8.67392 24.9998 10H14.9998C14.9998 8.67392 15.5266 7.40215 16.4643 6.46447C17.402 5.52678 18.6738 5 19.9998 5ZM32.7748 31.25C32.7703 31.2517 32.7653 31.2517 32.7608 31.25H7.2264L5.01234 12.5H34.9998L32.7748 31.25Z"
								fill="#335CFF"
							/>
						</svg>

						<p className="font-bold text-[18px] leading-[24px] text-[#18181B] mt-2">
							Manage Procurements
						</p>
					</div>
					<div className="p-4 rounded-2xl w-fit shadow-lg absolute top-[70%] right-5 bg-white">
						<span className="px-3 py-1 rounded-[24px] bg-[#D25625] font-medium text-[12px] leading-[16px] text-[#EBEFFF]">
							Announce
						</span>
						<p className="font-bold text-[18px] leading-[24px] text-[#18181B] mt-2">
							Corporate Notices
						</p>
					</div>
					<div className="p-4 rounded-2xl shadow-lg absolute top-[25%] right-10 bg-white w-fit">
						<p className="font-bold text-[18px] leading-[24px] text-[#18181B] mt-2">Share</p>
					</div>
				</div>
			</div>

			<div className="w-full h-screen bg-white flex items-center justify-center">
				<div className="w-[400px] max-w-[90%]">
					<div className="text-left mb-8">
						<h2 className="font-bold text-[24px] leading-[32px] text-[#18181B] mb-1">Login</h2>
					</div>

					<div className="space-y-4">
						{/* Email Field */}
						<div>
							<label
								htmlFor="email"
								className="block font-medium text-[14px] leading-[22px] text-[#18181B] mb-1">
								Email Address
							</label>
							<div className="relative">
								<span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A1A1AA]">
									<Mail className="w-5 h-5" />
								</span>
								<input
									id="email"
									type="email"
									autoComplete="email"
									required
									value={formData.email}
									// onChange={(e) => handleInputChange("email", e.target.value)}
									// onBlur={(e) => handleFieldBlur("email", e.target.value)}
									placeholder="e.g Johnsonsand@gmail.com"
									className={`w-full pl-10 pr-4 py-2.5 border rounded-lg bg-[#FAFAFA] text-base text-[#18181B] focus:outline-none focus:ring-2 placeholder:text-[#A1A1AA] placeholder:font-regular placeholder:text-[14px] placeholder:leading-[22px] placeholder:opacity-100 ${
										touchedFields.email && validationErrors.email
											? "border-red-500 focus:ring-red-500"
											: "border-[#E4E4E7] focus:ring-[#3F3F46]"
									}`}
								/>
							</div>
							{touchedFields.email && validationErrors.email && (
								<p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
							)}
						</div>

						{/* Password Field */}
						<div>
							<label
								htmlFor="password"
								className="block font-medium text-[14px] leading-[22px] text-[#18181B] mb-1">
								Password
							</label>
							<div className="relative">
								<input
									id="password"
									type={showPassword ? "text" : "password"}
									autoComplete="current-password"
									required
									value={formData.password}
									// onChange={(e) => handleInputChange("password", e.target.value)}
									// onBlur={(e) => handleFieldBlur("password", e.target.value)}
									placeholder="Enter password"
									className={`w-full px-4 py-2.5 border rounded-lg bg-[#FAFAFA] text-base text-[#18181B] focus:outline-none focus:ring-2 placeholder:text-[#A1A1AA] placeholder:font-regular placeholder:text-[14px] placeholder:leading-[22px] placeholder:opacity-100 ${
										touchedFields.password && validationErrors.password
											? "border-red-500 focus:ring-red-500"
											: "border-[#E4E4E7] focus:ring-[#3F3F46]"
									}`}
								/>
								<button
									type="button"
									className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A1A1AA]"
									onClick={() => setShowPassword((v) => !v)}
									tabIndex={-1}>
									{showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
								</button>
							</div>
							{touchedFields.password && validationErrors.password && (
								<p className="mt-1 text-sm text-red-600">{validationErrors.password}</p>
							)}
						</div>

						{/* Remember Me and Forgot Password */}
						<div className="flex items-center justify-between">
							{/* <label className="flex items-center">
								<input
									type="checkbox"
									className="w-4 h-4 text-[#335CFF] bg-gray-100 border-gray-300 rounded focus:ring-[#335CFF] focus:ring-2"
								/>
								<span className="ml-2 text-sm text-[#71717A]">Remember me</span>
							</label> */}
							<button
								type="button"
								onClick={() => setShowForgotPasswordModal(true)}
								className="text-sm text-[#335CFF] hover:underline font-medium ml-auto">
								Forgot Password?
							</button>
						</div>

						{/* Auth Error Display */}
						{/* {authError && (
							<div className="p-3 bg-red-50 border border-red-200 rounded-lg">
								<p className="text-sm text-red-600">{authError}</p>
							</div>
						)} */}

						{/* Submit Button */}
						<Button
							variant="default"
							className="w-full"
							onClick={handleSubmit}
							disabled={isLoading}>
							{isLoading ? "Signing in..." : "Continue"}
						</Button>

						{/* Sign Up Link */}
						<div className="text-center w-full flex justify-center">
							<p className="text-sm font-semibold text-[#71717A] flex items-center">
								Don&apos;t have an account?{" "}
							</p>
							<Link
								href="/auth/sign-up/employer"
								className="text-[#335CFF] hover:underline font-medium flex items-center ml-1">
								Signup→
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Forgot Password Modal */}
			{/* <ForgotPasswordModal
				isOpen={showForgotPasswordModal}
				onClose={() => setShowForgotPasswordModal(false)}
			/> */}
		</main>
	);
}