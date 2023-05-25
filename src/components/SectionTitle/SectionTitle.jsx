
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center my-8 px-3">
            <p className="text-amber-400 mb-3">--- {subHeading} ---</p>
            <h3 className="md:text-3xl text-2xl uppercase md:border-y-4 border-y-2 md:py-4 py-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;