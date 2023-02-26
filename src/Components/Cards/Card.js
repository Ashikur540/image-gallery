export const Card = ({ image }) => {
    return (
        <div className="relative cursor-pointer my-4 md:my-6 rounded-md">
            <img className="rounded-md" src={image?.img} alt={image?.title} />
            <style jsx>{`
      .overlay {
        border-radius: 0.375rem;
        background: linear-gradient(0deg, black, transparent);
      }
    `}</style>
            <div className="overlay absolute bottom-0 w-full h-24 px-4 pt-6">
                <div className="text-white text-lg">{image?.title}</div>
                <div className="text-gray-400 text-sm">Photographer</div>
            </div>
        </div>
    )

}