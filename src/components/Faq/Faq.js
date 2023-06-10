import React from 'react';

const Faq = () => {
    return (
        <div>
           <section class="py-10 bg-gray-900 sm:py-16 lg:py-24">
    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Questions & Answers</h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300">Explore the common questions and answers about Celebration</p>
        </div>

        <div class="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
            <div class="flex items-start">
                <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                    <span class="text-lg font-semibold text-white">?</span>
                </div>
                <div class="ml-4">
                    <p class="text-xl font-semibold text-white">How to create an account?</p>
                    <p class="mt-4 text-base text-gray-400">
Here's how it's done for Gmail: Open Gmail app. Click on your Profile Picture at the top right corner. The email address will appear in the drop-down menu..</p>
                </div>
            </div>

            <div class="flex items-start">
                <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                    <span class="text-lg font-semibold text-white">?</span>
                </div>
                <div class="ml-4">
                    <p class="text-xl font-semibold text-white">How can I make payment?</p>
                    <p class="mt-4 text-base text-gray-400">Make payment means transfer, transmittance, transmittal, delivery or exchange of money, currency, check, debit, credit or bank transfers.</p>
                </div>
            </div>

            <div class="flex items-start">
                <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                    <span class="text-lg font-semibold text-white">?</span>
                </div>
                <div class="ml-4">
                    <p class="text-xl font-semibold text-white">Do you provide discounts?</p>
                    <p class="mt-4 text-base text-gray-400">Be Firm and Persistent – Be confident in your way of asking. Say, “Will you give me 10% off my purchase since I'm buying two pairs of pants? That would help me afford this and be able to buy both” rather than “Do you think I'd maybe be able to get a little discount? If it's ok with you?” Be firm!</p>
                </div>
            </div>

            <div class="flex items-start">
                <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                    <span class="text-lg font-semibold text-white">?</span>
                </div>
                <div class="ml-4">
                    <p class="text-xl font-semibold text-white">How do you provide support?</p>
                    <p class="mt-4 text-base text-gray-400">People show emotional support for others by offering genuine encouragement, reassurance, and compassion. This might include things like verbal expressions of sympathy or physical gestures of affection..</p>
                </div>
            </div>
        </div>

        <div class="flex items-center justify-center mt-12 md:mt-20">
            <div class="px-8 py-4 text-center bg-gray-800 rounded-full">
                <p class="text-gray-50">Didn’t find the answer you are looking for? <a href="#" title="" class="text-yellow-300 transition-all duration-200 hover:text-yellow-400 focus:text-yellow-400 hover:underline">Contact our support</a></p>
            </div>
        </div>
    </div>
</section>

        </div>
    );
};

export default Faq;