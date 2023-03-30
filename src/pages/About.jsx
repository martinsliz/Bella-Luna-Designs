const About = () => {
  return (
    <div className="about">
      <h1 style={{ fontWeight: 'bolder' }}>About Page</h1>
      <span style={{ fontWeight: 'bolder' }}>
        <p>
          Bella Luna Designs was created about five years ago as a hobby and has
          become a successful Etsy business.
        </p>
        <p>Thank you for visiting our website, and happy shopping!</p>
      </span>
      <div className="about-us">
        <div className="liz-profile">
          <img
            className="liz"
            src={'https://imagizer.imageshack.com/img922/9600/ytDtvZ.jpg'}
            alt=""
          />
          <a
            className="liz-git"
            href="https://github.com/martinsliz"
            target="blank"
          >
            <img
              className="github"
              style={{ width: 30, height: 30 }}
              src="https://i.imgur.com/AjmoOeq.png"
              alt="github"
            />
          </a>
          <a
            className="liz-linkedIn"
            href="https://www.linkedin.com/in/elizmartins/"
            target="blank"
          >
            <img
              className="linkedIn"
              style={{ width: 30, height: 30 }}
              src="https://i.imgur.com/N4ceP5A.png"
              alt="linkedIn"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
