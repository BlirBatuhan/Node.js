import Photo from "../models/photoModel.js";
import {v2 as cloudinary} from'cloudinary';
import fs from 'fs';

const createPhoto = async (req, res) => {

    const result = await cloudinary.uploader.upload(
        req.files.image.tempFilePath,
        {
            use_filename: true,
            folder: 'lenslight_tr',
        }
    )

    console.log('RESULT::', result);

    const { name, description } = req.body;

    if (!name || !description) {
        return res.status(400).send('Name and description are required.');
    }

    try {
        await Photo.create({
            name: req.body.name,
            description: req.body.description,
            user: res.locals.user._id,
            url: result.secure_url,
        });
        fs.unlinkSync(req.files.image.tempFilePath); 
        res.status(201).redirect('/users/dashboard');
    } catch (error) {
        console.error(error); // Hataları daha iyi anlamak için
        res.status(500).json({ succeeded: false, error });
    }
};


const getAllPhotos = async (req, res) => {
    try {
        let photos;
        if (res.locals.user && res.locals.user._id) {
            photos = await Photo.find({ user: { $ne: res.locals.user._id } });
        } else {
            photos = await Photo.find({});
        }

        res.status(200).render("photos", {
            photos,
            link: "photos"
        });
    } catch (error) {
        res.status(500).json({ succeded: false, error });
    }
};

const getAPhoto = async (req,res) => {
    try{
        //------------------------------------------------------- User modülünü kullanarak referans aldırıp, user propertylerini kullanabiliyoruz.
        const photo = await Photo.findById({_id : req.params.id}).populate('user');
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