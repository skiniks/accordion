import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	useInnerBlocksProps,
	RichText,
} from "@wordpress/block-editor";

const Save = ({ attributes }) => {
	const { accordionTitle } = attributes;
	const { accordionId } = attributes;
	const blockProps = useBlockProps.save();
	const innerBlocksProps = useInnerBlocksProps.save(blockProps);
	const truncId = accordionId.slice(-8);

	return (
		<>
			<h3 {...innerBlocksProps}>
				<button
					className="accordion-toggle"
					id={`accordion-row-${truncId}`}
					aria-controls={`accordion-content-${truncId}`}
					aria-expanded="false"
				>
					<RichText.Content
						tagName="span"
						className="accordion-title"
						value={!!accordionTitle ? accordionTitle : __("Accordion Title")}
					/>
					<span className="accordion-icon"></span>
				</button>
			</h3>
			<div
				{...innerBlocksProps}
				id={`accordion-content-${truncId}`}
				role="region"
				aria-hidden="true"
				aria-labelledby={`accordion-row-${truncId}`}
			></div>
		</>
	);
};
export default Save;
