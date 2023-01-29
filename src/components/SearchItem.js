



export const SearchItem = ({title, tag, replies, views, activity}) => {
    return (
        <div className="search-item">
            
            <p className="search-para">{title}</p>
            <p className="search-para">{tag}</p>
            <p className="search-para">{replies}</p>
            <p className="search-para">{views}</p>
            <p className="search-para">{activity}</p>

        </div>
    )
}

