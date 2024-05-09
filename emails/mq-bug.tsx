import { Body, Head, Html, Preview, Text } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

export const Email = ({}) => {
	return (
		<Html>
			<Tailwind>
				<Preview>I am the preview text</Preview>
				<Head />
				<Body>
					<Text className="text-blue-700 max-sm:text-red-600">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</Text>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default Email;
