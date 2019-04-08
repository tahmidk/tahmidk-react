/**
 *  File:   [project_data.js]
 *  Auth:   Tahmid Khan
 *  Desc:   This file simply exports an array of Project props each representing
 *          a single coding project to be rendered under the Experience section
 *          of the main page
 */
const project_data = [
	{
		id: 7,
		name: "Optimized Graphical Raytracer",
		time: "Feb 2019 - Mar 2019",
		tags: "C++",
		desc:
			"Built a whole C++ program from scratch in Visual Studio 2017 implementing a standard raytracer. Employed relevant mathematics to simulate reflections, lighting, and intersection detection. Raytracer supports spheres and triangles. Due to its resource-intensive nature, program is optimized both in code, via parallelization and loop optimization, and by using the Bounded Volume Heirarchy (BVH) acceleration structure.",
		img: "raytracer.jpg"
	},
	{
		id: 6,
		name: "Context-Based Novel Translator",
		time: "Nov 2018",
		tags: "Python",
		desc:
			"This project was intended to produce a less mechanical, community-supported machine translation tool that outputs highly readable translations of Japanese text. Successfully created a Python script that webscrapes Japanese web novels directly from ncode.syosetu.com and outputs a readable translation by making use of a Google Translation API in conjunction with user produced .dict context files.",
		img: "downtrans.jpg"
	},
	{
		id: 5,
		name: "EnDMe Microprocessor Design",
		time: "Apr 2018 - Jun 2018",
		tags: "Verilog",
		desc:
			"Designed from scratch a full custom instruction set architecture (ISA) EnDMe (Encrypt Decrypt Message). Worked in a team of 2 to design a single-cycle modular CPU design, datapath, and control; I synthesized the CPU in Intel's Quartus Prime and tested it in Modelsim Altera. Optimized the design for encrypting and decrypting short messages using the MIPS architecture for reference.",
		img: "endme.jpg"
	},
	{
		id: 4,
		name: "Flashback Music Player",
		time: "Jan 2018 - Mar 2018",
		tags: "Java",
		desc:
			"Developed an android app that can be configured to play select nostalgic music. If a user plays a song at a given location, time and day, and user returns to that location in the future, the player will be more likely to play that song. App implemented in Android Studio. Development in a team of 6, employing Agile development cycle principles to thoroughly plan, implement, and deliver the app. Gained working experience of full-stack organized app development, ZenHub, Google API and design patterns as well as experience with JUnit and Expresso for code and UI testing.",
		img: "flashback_music.jpg"
	},
	{
		id: 3,
		name: "Modern Chess",
		time: "SUMMER 2017",
		tags: "C#",
		desc:
			"This was a recreational project implemented using the Unity Game Engine primarily in C#. Modern Chess is a 3D variation of traditional chess involving non-standard board layouts, board obstacles such as trees and rocks, and interactable items. Used 3DSMax to create certain objects and scripted a separate Python script simulating a very basic adversarial AI using the Minimax Algorithm.",
		img: "modern_chess.jpg"
	},
	{
		id: 2,
		name: "Android Emoji Keyboard",
		time: "Apr 2017",
		tags: "Java",
		desc:
			"Programmed an android keyboard with a button to insert emojis based on facial expression using Microsoft’s Cognitive Recognition API in a team of 4. Project implemented in Android Studio IDE. Team divided work by pair; my subteam was mainly responsible for front-end development and implementation of a keyboard button to trigger Microsoft Cognitive Recognition function",
		img: "emoji.jpg"
	},
	{
		id: 1,
		name: "Ultimate Tic-Tac-Toe Frenzy",
		time: "Dec 2015",
		tags: "Java",
		desc:
			"Programmed a multiplayer game complete with a menu, customized graphics and animations using the JavaFX library. Implemented and debugged in the Eclipse IDE and demonstrated project at a project fair",
		img: "ultimate_ttt.jpg"
	},
	{
		id: 100,
		name: "Research Intern - Multi-core PLC Project",
		time: "Aug 2018 - Jan 2019",
		tags: "Python",
		desc:
			"Under supervision of Prof. Al Faruque, implemented software portion of a Soft PLC System Resilience project at UCI's AICPS Lab. Responsibilities included analyzing and dissecting Beremiz, an open source Russian PLC Automation software, to run PLCs on specific cores simultaneously via a custom scheduler to improve system resilience. Programming in Python, gaining experience in multithreading, manipulating processes, using remote server proxy objects and MATLAB Simulink",
		img: "uci_intern.jpg"
	}
];

export default project_data;
