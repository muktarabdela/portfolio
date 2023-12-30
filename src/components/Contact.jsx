import { profiles } from "../constants"

const Contact = () => {
  return (
    <div className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-medium">Muktar Abdela</h1>
        <div className="flex space-x-4">
          {profiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.url}  
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-12 h-12 rounded-full hover:opacity-80 transition duration-300"
                src={profile.icon}
                alt={profile.name}
              />
            </a>
          ))}
        </div>
        <div className="text-center mt-4">
          <p className="text-sm">Call Me</p>
          <p className="text-lg">+251-932874527</p>
          <p className="text-sm mt-4">Email Me</p>
          <p className="text-lg">muktarabdela10@gmail.com</p>
        </div>
        <p className="text-sm mt-4">
          © Copyright Muktar. All Rights Reserved
        </p>
      </div>
    </div>



  );
};

export default Contact

