import Photo from "../models/photoModel.js";

const createPhoto = async (req, res) => {

    const { name, description } = req.body;

    if (!name || !description) {
        return res.status(400).send('Name and description are required.');
    }

    try {
        await Photo.create({
            name,
            description,
            user: res.locals.user._id,
        });
        res.status(201).redirect('/users/dashboard');
    } catch (error) {
        console.error(error); // Hataları daha iyi anlamak için
        res.status(500).json({ succeeded: false, error });
    }
};


const getAllPhotos = async (req,res) => {
    try{
        const photos = await Photo.find({});
        res.status(200).render("photos", {
        photos, 
        link: "photos"
        });
    }
    catch (error) {
        res.status(500).json({succeded:false, error});
    }
    
}

const getAPhoto = async (req,res) => {
    try{
        const photo = await Photo.findById({_id : req.params.id});
        res.status(200).render('photo', { 
        photo, 
        link: 'photo'
        });
    }
    catch (error) {
        res.status(500).json({succeded:false, error});
    }
    
}

export {createPhoto, getAllPhotos,getAPhoto};