import addsellerModle from "../modelsschema/addseller.js";

const addsellers = async (req, res) => {
    console.log("reqdata ====> ", req.body, "========");
    console.log(".....................................");
    const { firstname, lastname, phoneno, role, selleremail } = req.body;

    const { filename, path}  = req.file;

   

    console.log('---------------------------------------------', filename,path);
    console.log({ firstname, lastname, phoneno, role, selleremail }, "there again print image =====>", filename,path);

    if (!firstname || !lastname || !role || !phoneno || !selleremail ) {
        return res.status(400).json({ success: false, message: "Missing Details" });
    }

    try {
        // New seller document creation with the image data as an object
        const newSeller = new addsellerModle({
            firstname,
            lastname,
            phoneno,
            role,
            selleremail,
            sellerimage: {filename,path},  // Store filename and path as an object
        });

        await newSeller.save();
        // console.log({ message: "after save data in mongo db =======================", dataseller: newSeller });

        res.status(200).json({ success: true, message: 'Product added successfully', data: newSeller });
    } catch (error) {
        console.error("Error while adding product:", error.message);
        res.status(500).json({ success: false, message: 'Something went wrong', error: error.message });
    }
}

const getsellersinfo = async (req, res) => {
    try {
        const sellers = await addsellerModle.find();  // Fetch all products from the database
        console.log('Products fetched successfully:', sellers);
        res.status(200).json(sellers);  // Send the data as a response
    } catch (err) {
        console.log('Error fetching products:', err);
        res.status(500).json({ message: 'Error fetching products' });  // Send an error response
    }
}
export { addsellers, getsellersinfo };
