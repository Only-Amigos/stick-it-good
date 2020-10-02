import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h2 className="sub-header text-center uppercase py-8">Send us a Message:</h2>
    <form name="contact" method="POST" data-netlify="true" className="w-1/2 bg-orange-100 shadow-lg mx-auto mb-10 p-10">
      <label className="text-grey-600">Your Name:
        <input type="text" name="name" className="w-full h-10 border-2 border-grey-500 bg-transparent block mb-4 p-2"/>
      </label>
      <label className="text-grey-600">Your Email:
        <input type="email" name="email" className="w-full h-10 border-2 border-grey-500 bg-transparent block mb-4 p-2"/>
      </label>
      <label className="text-grey-600">Message:
        <textarea name="message" className="w-full h-32 border-2 border-grey-500 bg-transparent block mb-4 p-2"></textarea>
      </label>
      <div data-netlify-recaptcha="true" className="w-full block mb-4 p-2"></div>
      <button type="submit" className="w-full h-10 font-semibold text-grey-700 bg-orange-300 border-2 border-grey-800 my-5">Send</button>
    </form>
  </Layout>
)

export default ContactPage
