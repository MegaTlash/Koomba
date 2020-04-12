import axios from 'axios';

const url = 'http://localhost:3000/api/clothes'


class ClothesService{

    //Get Posts
    static getClothes(){
        return new Promise((resolve, reject) => {
            axios.get(url).then((res) =>{
                const data = res.data;
                resolve(
                    data.map(clothes=> ({
                        ...clothes,
                    }))
                );
            })
            .catch ((err) => {
                reject(err);
            })
        });
    }
}

export default ClothesService;