"use client"

import { useState } from "react"
import { X, Shield, FileText, Cookie } from "lucide-react"

interface PolicyModalProps {
    isOpen: boolean
    onClose: () => void
    type: "privacy" | "terms" | "cookie"
}

export function PolicyModal({ isOpen, onClose, type }: PolicyModalProps) {
    if (!isOpen) return null

    const getContent = () => {
        switch (type) {
            case "privacy":
                return {
                    title: "Privacy Policy",
                    icon: Shield,
                    content: (
                        <div className="space-y-6">
                            <section>
                                <h3 className="text-xl font-semibold text-white mb-3">Information We Collect</h3>
                                <p className="text-blue-200 leading-relaxed mb-4">
                                    At Renewaa Private Limited, we are committed to protecting your privacy and safeguarding your personal information. This Privacy Policy explains how we collect, use, and protect data when you interact with our website (www.renewaa.com) or our services.
                                </p>
                                <ul className="list-disc list-inside text-blue-200 space-y-2">
                                    <li>We may collect the following types of information when you visit our website, contact us, or use our services:</li>
                                    <li>Personal details (name, email address, phone number, company name) submitted through contact forms or inquiries.</li>
                                    <li>Project-related details (site address, energy requirements, technical specifications) provided for consultations and proposals.</li>
                                    <li>Payment and billing information when purchasing products or services.</li>
                                    <li>Website usage data (IP address, browser type, pages visited) through cookies and analytics tools.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-xl font-semibold text-white mb-3">How We Use Your Information</h3>
                                <p className="text-blue-200 leading-relaxed mb-4">
                                    Your information is used to:
                                </p>
                                <ul className="list-disc list-inside text-blue-200 space-y-2">
                                    <li>Respond to your inquiries and provide requested services.</li>
                                    <li>Process orders, payments, and project-related documentation.</li>
                                    <li>Improve our website, products, and services.</li>
                                    <li>Send important updates, offers, or newsletters (only if you opt-in).</li>
                                    <li>Comply with legal and regulatory requirements.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-xl font-semibold text-white mb-3">Data Protection & Security</h3>
                                <p className="text-blue-200 leading-relaxed">
                                    We use industry-standard security measures to protect your data against unauthorized access, disclosure, or alteration. Your personal information will not be sold, rented, or shared with third parties except:
                                </p>
                                <ul className="list-disc list-inside text-blue-200 space-y-2">
                                    <li>With trusted service providers who assist us in delivering our services.</li>
                                    <li>When required by law or government authorities.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-xl font-semibold text-white mb-3">Cookies & Analytics</h3>
                                <p className="text-blue-200 leading-relaxed">
                                    Our website uses cookies to improve user experience and track website performance. You can manage or disable cookies through your browser settings.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-xl font-semibold text-white mb-3">Your Rights</h3>
                                <p className="text-blue-200 leading-relaxed">
                                    You have the right to:
                                </p>
                                <ul className="list-disc list-inside text-blue-200 space-y-2">
                                    <li>Access, update, or request deletion of your personal information.</li>
                                    <li>Opt out of marketing communications at any time.</li>
                                    <li>Request details on how your data is being processed.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-xl font-semibold text-white mb-3">Third-Party Links</h3>
                                <p className="text-blue-200 leading-relaxed">
                                    Our website may contain links to external websites. Renewaa is not responsible for the privacy practices or content of third-party sites.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-xl font-semibold text-white mb-3">Updates to This Policy</h3>
                                <p className="text-blue-200 leading-relaxed">
                                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &quot;Last Revised&quot; date.
                                </p>
                            </section>
                        </div>
                    ),
                }

            case "terms":
                return {
                    title: "Terms & Conditions",
                    icon: FileText,
                    content: (
                        <div className="space-y-6">
                            <section>
                                <h3 className="text-xl font-semibold text-white mb-3"> General</h3>
                                <p className="text-blue-200 leading-relaxed mb-4">
                                    Welcome to Renewaa Private Limited. By accessing or using our website (www.renewaa.com) and services, you agree to the following Terms & Conditions. Please read them carefully.
                                </p>
                                <ul className="list-disc list-inside text-blue-200 space-y-2">
                                    <li>These Terms apply to all visitors, customers, and users of our website and services.</li>
                                    <li>By using our website or purchasing our products/services, you accept these Terms in full.</li>
                                    <li>Renewaa reserves the right to update or modify these Terms at any time without prior notice.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-xl font-semibold text-white mb-3">Products & Services</h3>
                                {/* <p className="text-blue-200 leading-relaxed mb-4">Our installation process includes:</p> */}
                                <ul className="list-disc list-inside text-blue-200 space-y-2">
                                    <li>All products and services, including lithium battery packs, solar systems, EV upgrades, and engineering solutions, are provided subject to availability.</li>
                                    <li>Product specifications and features listed on our website may be updated or changed to improve performance and quality.</li>
                                    <li>Installation, maintenance, and support services are provided as per agreed project terms and may vary based on customer requirements.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-xl font-semibold text-white mb-3">Pricing & Payment</h3>
                                {/* <p className="text-blue-200 leading-relaxed mb-4">Our installation process includes:</p> */}
                                <ul className="list-disc list-inside text-blue-200 space-y-2">
                                    <li>Prices displayed on the website or provided in quotations are subject to change without notice.</li>
                                    <li>Payments must be made in full, unless otherwise agreed in writing.</li>
                                    <li>All transactions are subject to applicable taxes and fees.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-xl font-semibold text-white mb-3">Warranty & After-Sales Service</h3>
                                {/* <p className="text-blue-200 leading-relaxed mb-4">Our installation process includes:</p> */}
                                <ul className="list-disc list-inside text-blue-200 space-y-2">
                                    <li>Our lithium battery products are covered by a 5-year+ warranty, subject to proper use and maintenance.</li>
                                    <li>Warranty does not cover damage caused by misuse, unauthorized modifications, accidents, or external factors beyond our control.</li>
                                    <li>After-sales support is available for consultation, troubleshooting, and service assistance.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-xl font-semibold text-white mb-3">Customer Responsibilities</h3>
                                {/* <p className="text-blue-200 leading-relaxed mb-4">Our installation process includes:</p> */}
                                <ul className="list-disc list-inside text-blue-200 space-y-2">
                                    <li>Customers are responsible for providing accurate information during consultations and purchases.</li>
                                    <li>Proper use, handling, and maintenance of products must follow the guidelines provided by Renewaa.</li>
                                    <li>Any unauthorized modifications or third-party repairs may void warranties.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-xl font-semibold text-white mb-3">Limitation of Liability</h3>
                                {/* <p className="text-blue-200 leading-relaxed mb-4">Our installation process includes:</p> */}
                                <ul className="list-disc list-inside text-blue-200 space-y-2">
                                    <li>Renewaa shall not be liable for indirect, incidental, or consequential damages arising from the use of our products or services.</li>
                                    <li>We are not responsible for delays or failures caused by events beyond our reasonable control (force majeure).</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-xl font-semibold text-white mb-3">Intellectual Property</h3>
                                {/* <p className="text-blue-200 leading-relaxed mb-4">Our installation process includes:</p> */}
                                <ul className="list-disc list-inside text-blue-200 space-y-2">
                                    <li>All content, logos, designs, and materials on our website are the property of Renewaa Private Limited.</li>
                                    <li>Unauthorized use, reproduction, or distribution of our materials is strictly prohibited.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-xl font-semibold text-white mb-3">Website Use</h3>
                                {/* <p className="text-blue-200 leading-relaxed mb-4">Our installation process includes:</p> */}
                                <ul className="list-disc list-inside text-blue-200 space-y-2">
                                    <li>You agree not to misuse our website, interfere with security, or attempt unauthorized access.</li>
                                    <li>Third-party links provided on our site are for convenience only; Renewaa is not responsible for their content or practices.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-xl font-semibold text-white mb-3">Governing Law</h3>
                                {/* <p className="text-blue-200 leading-relaxed mb-4">Our installation process includes:</p> */}
                                <ul className="list-disc list-inside text-blue-200 space-y-2">
                                    <li>These Terms & Conditions are governed by the laws of Sri Lanka.</li>
                                    <li>Any disputes shall be resolved under the jurisdiction of Sri Lankan courts.</li>
                                </ul>
                            </section>
                        </div>
                    ),
                }

            case "cookie":
                return {
                    title: "Cookie Policy",
                    icon: Cookie,
                    content: (
                        <div className="space-y-6">
                            <section>
                                <h3 className="text-xl font-semibold text-white mb-3">What Are Cookies</h3>
                                <p className="text-blue-200 leading-relaxed mb-4">
                                    Cookies are small text files that are stored on your device when you visit our website. They help us
                                    provide you with a better browsing experience and analyze how our website is used.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-xl font-semibold text-white mb-3">Types of Cookies We Use</h3>
                                <div className="space-y-4">
                                    <div className="bg-white/5 rounded-lg p-4">
                                        <h4 className="font-semibold text-white mb-2">Essential Cookies</h4>
                                        <p className="text-blue-200 text-sm">
                                            Required for the website to function properly and cannot be disabled.
                                        </p>
                                    </div>
                                    <div className="bg-white/5 rounded-lg p-4">
                                        <h4 className="font-semibold text-white mb-2">Analytics Cookies</h4>
                                        <p className="text-blue-200 text-sm">Help us understand how visitors interact with our website.</p>
                                    </div>
                                    <div className="bg-white/5 rounded-lg p-4">
                                        <h4 className="font-semibold text-white mb-2">Marketing Cookies</h4>
                                        <p className="text-blue-200 text-sm">
                                            Used to deliver relevant advertisements and track campaign performance.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-xl font-semibold text-white mb-3">Managing Cookies</h3>
                                <p className="text-blue-200 leading-relaxed">
                                    You can control and manage cookies through your browser settings. Please note that disabling certain
                                    cookies may affect the functionality of our website and your user experience.
                                </p>
                            </section>
                        </div>
                    ),
                }
        }
    }

    const { title, icon: Icon, content } = getContent()

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

            <div className="relative w-full max-w-6xl max-h-[100vh] bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-slate-800/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                            <Icon className="h-5 w-5 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-white">{title}</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                    >
                        <X className="h-5 w-5 text-white" />
                    </button>
                </div>

                <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)] custom-scrollbar">{content}</div>

                <div className="p-6 border-t border-white/10 bg-gradient-to-r from-slate-900/50 to-blue-900/50">
                    <div className="flex justify-between items-center">
                        <p className="text-blue-200 text-sm">Last updated: September 2025</p>
                        <button
                            onClick={onClose}
                            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 rounded-lg text-white font-medium transition-all duration-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function usePolicyModals() {
    const [activeModal, setActiveModal] = useState<"privacy" | "terms" | "cookie" | null>(null)

    const openModal = (type: "privacy" | "terms" | "cookie") => {
        setActiveModal(type)
    }

    const closeModal = () => {
        setActiveModal(null)
    }

    return {
        activeModal,
        openModal,
        closeModal,
    }
}
