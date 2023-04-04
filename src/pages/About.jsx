const people = [
  {
    name: 'Marina',
    role: 'Founder / CEO',
    imageUrl: 'https://i.imgur.com/SXwdIfZ.png',
    bio: 'I put lots of love and care into each package, and appreciate my customers and supporters so much. It would also mean a lot to me if you leave a review post purchasing. It helps with recognition and overall success on this site! To learn more about me and my products follow my instagram!',
    etsyUrl: 'https://www.etsy.com/shop/BellaLunaDesigns027?ref=profile_header',
    instaUrl: 'https://www.instagram.com/bella.luna.designs'
  },
  {
    name: '',
    role: '',
    imageUrl: '',
    gitHubUrl: '',
    linkedinUrl: ''
  }
]
const About = () => {
  return (
    <div className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
        <div className="max-w-2xl xl:col-span-2">
          <h2 className="font-Castoro text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className="font-Castoro mt-6 text-lg leading-8 text-gray-600">
            Bella Luna Designs was created about five years ago as a hobby and
            is on its way to becoming a successful small business. Thanks so
            much for visiting!
          </p>
        </div>
        <ul
          role="list"
          className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3"
        >
          {people.map((person) => (
            <li
              key={person.name}
              className="font-Castoro flex flex-col gap-10 pt-12 sm:flex-row"
            >
              <img
                className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
                src={person.imageUrl}
                alt={person.name}
              />
              <div className="max-w-xl flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {person.role}
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  {person.bio}
                </p>
                <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                    <a
                      href={person.etsyUrl}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <i class="fa-brands fa-etsy"></i>
                      <span className="sr-only">Twitter</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      ></svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href={person.instaUrl}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <i class="fa-brands fa-instagram"></i>
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      ></svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default About
