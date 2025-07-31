import picture from '../assets/avatar-anggelo.jpg'

function Card() {
  return (
    <section className="h-auto w-5/6 max-w-[400px] bg-Grey-800 rounded-lg flex flex-col gap-6 px-10 py-8">
      <div className="w-full flex justify-center ">
        <img
          src={picture}
          alt="Picture for perfil"
          className="w-20 rounded-full"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-center text-xl text-White font-medium">
          Anggelo Huz
        </h3>
        <h4 className="text-center text-xs font-medium text-Green">
          Trujillo, Venezuela
        </h4>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-center text-White text-xs font-extralight">
          "Front-end developer and avid reader."
        </p>
        <ul className="w-full flex flex-col gap-3 justify-center">
          <li className="flex items-center w-full">
            <a
              target="_blank"
              href="https://github.com/AnggeloHuz"
              className="w-full text-center bg-Grey-700 rounded-md p-3 text-sm font-medium text-White hover:bg-Green hover:text-Grey-800 transition-all duration-300"
            >
              GitHub
            </a>
          </li>
          <li className="flex items-center w-full">
            <a
              target="_blank"
              href="https://www.frontendmentor.io/profile/AnggeloHuz"
              className="w-full text-center bg-Grey-700 rounded-md p-3 text-sm font-medium text-White hover:bg-Green hover:text-Grey-800 transition-all duration-300"
            >
              Frontend Mentor
            </a>
          </li>
          <li className="flex items-center w-full">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/anggel-huz-pernia-3016a7263/"
              className="w-full text-center bg-Grey-700 rounded-md p-3 text-sm font-medium text-White hover:bg-Green hover:text-Grey-800 transition-all duration-300"
            >
              Linkedin
            </a>
          </li>
          <li className="flex items-center w-full">
            <a
              target="_blank"
              href="https://www.facebook.com/anggelo.huz/"
              className="w-full text-center bg-Grey-700 rounded-md p-3 text-sm font-medium text-White hover:bg-Green hover:text-Grey-800 transition-all duration-300"
            >
              Facebook
            </a>
          </li>
          <li className="flex items-center w-full">
            <a
              target="_blank"
              href="https://www.instagram.com/anggelo_huz/"
              className="w-full text-center bg-Grey-700 rounded-md p-3 text-sm font-medium text-White hover:bg-Green hover:text-Grey-800 transition-all duration-300"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Card
