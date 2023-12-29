import { PropsWithChildren, useEffect, useState } from "react";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { formatDate } from "../../services/util.service";
import { IApiResponse } from "../../interfaces/utils.interface";
import { Loader } from "../../styles/layouts/page-layout.style";
import { IPostCategory } from "../../interfaces/objects.interface";
import {
	GridContainer,
	GridLink,
} from "../../styles/components/dashboard-grid.style";
import { listPostCategories } from "../../services/cl-api/post-categories.service";
import {
	DashboardSubheader,
	DashboardText,
} from "../../styles/layouts/admin-layout.style";

// Data
interface ComponentProps {
	postCategory: IPostCategory;
}

// Components
function PostCategoriesGridItem({
	postCategory,
}: PropsWithChildren<ComponentProps>) {
	return (
		<GridLink to={`/post-categories/${postCategory.post_category_id}`}>
			<DashboardSubheader link>{postCategory.label}</DashboardSubheader>
			<DashboardText>{postCategory.text}</DashboardText>
			<DashboardText>
				<em>{`Updated at ${formatDate(postCategory.updated_at)}`}</em>
			</DashboardText>
		</GridLink>
	);
}
function PostCategoriesGrid() {
	// State
	const [postCategories, setPostCategories] = useState<
		(IPostCategory | undefined)[]
	>([]);
	// Effects
	// load post categories
	useEffect(
		function () {
			async function loadPostCategories() {
				const response: IApiResponse = await listPostCategories();
				if (response.data) setPostCategories(response.data);
				// TODO: handle error
			}
			if (!postCategories.length) loadPostCategories();
		},
		[postCategories],
	);

	return postCategories ? (
		<>
			<DashboardSubheader>Post Categories</DashboardSubheader>
			<GridContainer>
				{postCategories.map(function (postCategory) {
					return (
						postCategory && (
							<PostCategoriesGridItem
								key={postCategory.post_category_id}
								postCategory={postCategory}
							/>
						)
					);
				})}
			</GridContainer>
		</>
	) : (
		<Loader icon={faSpinner} />
	);
}

export { PostCategoriesGrid };
