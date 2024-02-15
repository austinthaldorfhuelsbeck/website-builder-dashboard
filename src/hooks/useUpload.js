import { useEffect, useState } from "react";

import {
	getDownloadURL,
	getStorage,
	ref,
	uploadBytesResumable,
} from "@firebase/storage";

import firebaseApp from "../firebase";

const useUpload = () => {
	const [file, setFile] = useState();
	const [percent, setPercent] = useState();
	const [fileUrl, setFileUrl] = useState();
	const [uploadError, setUploadError] = useState("");

	const onFileChange = (e) => {
		if (e.target.files) setFile(e.target.files[0]);
	};

	useEffect(() => {
		const uploadFile = (file) => {
			const storage = getStorage(firebaseApp);
			const fileName = new Date().valueOf() + file.name; // prevents dups
			const storageRef = ref(storage, fileName);
			const uploadTask = uploadBytesResumable(storageRef, file);

			uploadTask.on(
				"state_changed",
				(snapshot) => {
					setPercent(
						Math.round(
							(snapshot.bytesTransferred / snapshot.totalBytes) *
								100,
						),
					);
				},
				(error) => setUploadError(error),
				() => getDownloadURL(uploadTask.snapshot.ref).then(setFileUrl),
			);
		};

		if (file) uploadFile(file);
	}, [file]);

	return {
		onFileChange,
		percent,
		fileUrl,
		uploadError,
	};
};

export default useUpload;
