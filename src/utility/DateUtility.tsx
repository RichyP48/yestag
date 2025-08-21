const formatDate=(dateString: any)=>{
    if(!dateString) return undefined;
    const months=[
        "january",
        "February",
        "March", 
        "April", 
        "May",
         "June",
        "July",
        "August",
         "Septembre",
         "Octobre",
         "Novembre",
         "Decembre"
    ];
    const date = new Date(dateString);
    const day= date.getDate();
    const month=months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`
}
export {formatDate}