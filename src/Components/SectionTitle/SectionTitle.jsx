// eslint-disable-next-line react/prop-types
const SectionTitle = ({title, subTitle}) => {
    return (
        <div className="my-10 ">
            <h1 className="font-bold text-2xl text-cyan-500 lg:text-5xl font-Marcellus text-center mt-28 lg:mb-5 mb-2">{title}</h1>
            <h5 className="font-semibold text-lg font-Poppins  lg:text-xl font-Poppins text-center">{subTitle}</h5>
        </div>
    );
};

export default SectionTitle;