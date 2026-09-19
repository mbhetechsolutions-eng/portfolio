import { Building2, Code2, GraduationCap } from 'lucide-react'

import { personalInfo } from '../config/personal'



const highlights = [

  {

    icon: GraduationCap,

    title: 'Software Engineering Student',

    description:

      'Second-year BSc IT Software Engineering student at Eduvos Pretoria Campus with strong academic results and hands-on commercial project experience.',

  },

  {

    icon: Building2,

    title: 'Founder, MbheTech Solutions',

    description:

      'Leading client-facing development, from requirements gathering and UI design through to deployment and support.',

  },

  {

    icon: Code2,

    title: 'Real Client Projects',

    description:

      'Delivered production websites and business systems for organisations across engineering, accounting, e-commerce, pharmacy, landscaping, skills development and faith-based sectors.',

  },

]



type AboutProps = {

  asPage?: boolean

}



export default function About({ asPage = false }: AboutProps) {

  const Heading = asPage ? 'h1' : 'h2'



  return (

    <section id="about" className="section-divider bg-white py-20 lg:py-28" aria-labelledby="about-heading">

      <div className="section-container">

        <div className="max-w-3xl">

          <Heading id="about-heading" className="section-heading">

            About <span className="gradient-text">Me</span>

          </Heading>

          <p className="section-subheading">

            Software engineering student and commercial developer building real-world solutions.

          </p>

        </div>



        <div className="mt-12 grid items-start gap-12 lg:grid-cols-2">

          <div className="space-y-8">

            <figure className="mx-auto max-w-xs lg:mx-0 lg:max-w-sm">

              <div className="relative overflow-hidden rounded-xl border border-slate-200">

                <img

                  src={personalInfo.profileImage}

                  alt={personalInfo.profileImageAlt}

                  width={400}

                  height={500}

                  loading="lazy"

                  className="aspect-[4/5] w-full object-cover object-top"

                />

              </div>

              <figcaption className="mt-4 text-center lg:text-left">

                <p className="text-sm font-medium text-slate-900">{personalInfo.fullName}</p>

                <p className="mt-1 text-xs text-slate-500">{personalInfo.location}</p>

              </figcaption>

            </figure>



            <div className="space-y-6 leading-relaxed text-slate-600">
              <p>{personalInfo.aboutParagraphs[0]}</p>

              <div>
                <h3 className="text-base font-medium text-slate-900">Why Software Engineering</h3>
                <p className="mt-2">{personalInfo.whySoftwareEngineering}</p>
              </div>

              {personalInfo.aboutParagraphs.slice(1).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

          </div>



          <div className="space-y-4">

            {highlights.map(({ icon: Icon, title, description }) => (

              <article key={title} className="surface-card p-6 transition-colors hover:bg-slate-100/80">

                <div className="flex items-start gap-4">

                  <div className="icon-well flex-shrink-0">

                    <Icon size={22} aria-hidden="true" />

                  </div>

                  <div>

                    <h3 className="text-lg font-medium text-slate-900">{title}</h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-500">{description}</p>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </div>

    </section>

  )

}


