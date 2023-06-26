$form = $('#giphyform');
$searchBtn = $('#searchBtn');
$removeBtn = $('#removeBtn');
$searchBox = $('#searchbox');
$div = $('#giphycontainer');


async function getImage(){
    let newImg = document.createElement('img')
    let searchTerm = $searchBox.val();
    let res = await axios.get('http://api.giphy.com/v1/gifs/search',
    {params:{
        q: searchTerm,
        api_key: 'pzFI5PUeZGsSyCaBF7fY2YAUQ8OioNEG'
    }});
    let randomNumber = Math.floor(Math.random()*res.data.data.length);
    let gif = (res.data.data[randomNumber].images.original.url)
    newImg.src = gif;
    $div.append(newImg)
    $searchBox.val('');
}

$searchBtn.click(function(e){
    e.preventDefault();
    getImage();
})

$removeBtn.click(function(e){
    e.preventDefault();
    $div.empty();
})