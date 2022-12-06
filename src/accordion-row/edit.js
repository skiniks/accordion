import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	useInnerBlocksProps,
	RichText,
} from "@wordpress/block-editor";

const TEMPLATE = [
	[
		"core/paragraph",
		{
			placeholder: "Enter content here...",
		},
	],
];

function AccordionRow({ attributes, setAttributes, clientId }) {
	const { accordionTitle } = attributes;
	const { accordionId } = attributes;
	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		template: TEMPLATE,
		templateLock: false,
	});

	return (
		<>
			<h3 {...innerBlocksProps}>
				<button
					className="accordion-toggle"
					onClick={(event) => event.preventDefault()}
				>
					<RichText
						tagName="span"
						aria-label={__("Add accordion title")}
						className="accordion-title"
						value={
							!!accordionTitle ? accordionTitle : __("Enter Accordion Title...")
						}
						onChange={(newAccordionTitle) =>
							setAttributes({
								accordionTitle: newAccordionTitle,
								accordionId: clientId,
							})
						}
					/>
					<span className="accordion-icon"></span>
				</button>
			</h3>
			<div {...innerBlocksProps}></div>
		</>
	);
}

export default AccordionRow;
