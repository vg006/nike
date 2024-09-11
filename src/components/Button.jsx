const Button = ({label, iconURL, bgcolor, bordercolor, textcolor, fullWidth}) => {
    return (
        <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full 
            ${bgcolor ? bgcolor : 'bg-coral-red'} 
            ${textcolor ? textcolor : 'text-white'} 
            ${bordercolor ? bordercolor : 'border-coral-red'}
            ${fullWidth && 'w-full'}`}>
            {label}

        {
            iconURL && <img
            src={iconURL}
            alt={`arrow right icon`}
            className={`ml-2 rounded-full w-5 h-5`}/>
        }
    </button>
  )
}

export default Button;