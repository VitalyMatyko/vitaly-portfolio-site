import aboutStyles from './About.module.scss';

const About = () => {
	return (
		<div className={aboutStyles.about_page_container}>
			<div className={aboutStyles.about_page}>

				<div className={aboutStyles.about_page_header}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1440 320">
						<path
							fill="#008000"
							fillOpacity="1"
							transform='scale(1,1)'
							d="M0,320L6.2,320C12.3,320,25,320,37,304C49.2,288,62,256,74,234.7C86.2,213,98,203,111,181.3C123.1,160,135,
								128,148,122.7C160,117,172,139,185,176C196.9,213,209,267,222,266.7C233.8,267,246,213,258,165.3C270.8,117,283,
								75,295,96C307.7,117,320,203,332,234.7C344.6,267,357,245,369,234.7C381.5,224,394,224,406,186.7C418.5,149,431,
								75,443,48C455.4,21,468,43,480,90.7C492.3,139,505,213,517,218.7C529.2,224,542,160,554,165.3C566.2,171,578,245,
								591,272C603.1,299,615,277,628,272C640,267,652,277,665,250.7C676.9,224,689,160,702,149.3C713.8,139,726,181,738,
								176C750.8,171,763,117,775,128C787.7,139,800,213,812,229.3C824.6,245,837,203,849,181.3C861.5,160,874,160,886,
								181.3C898.5,203,911,245,923,245.3C935.4,245,948,203,960,181.3C972.3,160,985,160,997,149.3C1009.2,139,1022,117,
								1034,117.3C1046.2,117,1058,139,1071,133.3C1083.1,128,1095,96,1108,80C1120,64,1132,64,1145,64C1156.9,64,1169,64,
								1182,101.3C1193.8,139,1206,213,1218,213.3C1230.8,213,1243,139,1255,122.7C1267.7,107,1280,149,1292,138.7C1304.6,
								128,1317,64,1329,80C1341.5,96,1354,192,1366,202.7C1378.5,213,1391,139,1403,122.7C1415.4,107,1428,149,1434,170.7L1440,
								192L1440,0L1433.8,0C1427.7,0,1415,0,1403,0C1390.8,0,1378,0,1366,0C1353.8,0,1342,0,1329,0C1316.9,0,1305,0,1292,0C1280,
								0,1268,0,1255,0C1243.1,0,1231,0,1218,0C1206.2,0,1194,0,1182,0C1169.2,0,1157,0,1145,0C1132.3,0,1120,0,1108,0C1095.4,0,
								1083,0,1071,0C1058.5,0,1046,0,1034,0C1021.5,0,1009,0,997,0C984.6,0,972,0,960,0C947.7,0,935,0,923,0C910.8,0,898,0,886,
								0C873.8,0,862,0,849,0C836.9,0,825,0,812,0C800,0,788,0,775,0C763.1,0,751,0,738,0C726.2,0,714,0,702,0C689.2,0,677,0,665,
								0C652.3,0,640,0,628,0C615.4,0,603,0,591,0C578.5,0,566,0,554,0C541.5,0,529,0,517,0C504.6,0,492,0,480,0C467.7,0,455,0,443,
								0C430.8,0,418,0,406,0C393.8,0,382,0,369,0C356.9,0,345,0,332,0C320,0,308,0,295,0C283.1,0,271,0,258,0C246.2,0,234,0,222,
								0C209.2,0,197,0,185,0C172.3,0,160,0,148,0C135.4,0,123,0,111,0C98.5,0,86,0,74,0C61.5,0,49,0,37,0C24.6,0,12,0,6,0L0,0Z">
						</path>
					</svg>
				</div>

				<div className={aboutStyles.about_page_text}>
					<div className={aboutStyles.about_page_text_sentence}>
						<div className={aboutStyles.name_sentence}>My name is Vitaliy Matyko.</div>
						<div className={aboutStyles.sentence}>
							<span className={aboutStyles.about_page_text_sentence_first_letter}>
								I'm</span> a Frontend / Backend ( Full Stack ) developer with a passion for web technologies and modern frameworks.
						</div>
						<div className={aboutStyles.sentence}>
							<span className={aboutStyles.about_page_text_sentence_first_letter}>
								I'm</span> constantly learning native JavaScript, backend technologies, and new development tools.
						</div>
						<div className={aboutStyles.sentence}>
							<span className={aboutStyles.about_page_text_sentence_first_letter}>
								I'm</span> a quick learner, and easily adapt to new technologies.
						</div>
						<div className={aboutStyles.sentence}>
							<span className={aboutStyles.about_page_text_sentence_first_letter}>
								My</span> primary focus is on business requirements and user convenience.
						</div>
						<div className={aboutStyles.sentence}>
							<span className={aboutStyles.about_page_text_sentence_first_letter}>
								It's</span> important for me to be part of a team that strives to create high-quality and innovative products.
						</div>
						<div className={aboutStyles.sentence}><span className={aboutStyles.about_page_text_sentence_first_letter}>Thanks</span> to my experience in both frontend and backend, I take a comprehensive approach to tasks, offering optimal solutions.
						</div>
						<div className={aboutStyles.sentence}>
							<span className={aboutStyles.about_page_text_sentence_first_letter}>
								I</span> would be glad to join a company that values growth, innovation, and professional development.
						</div>
					</div>
				</div>

				<div className={aboutStyles.about_page_bottom_svg}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1440 320">
						<path
							fill="#008000"
							fillOpacity="1"
							transform='scale(1,1)'
							d="M0,64L6.2,69.3C12.3,75,25,85,37,101.3C49.2,117,62,139,74,170.7C86.2,203,98,245,111,229.3C123.1,213,135,139,148,
							117.3C160,96,172,128,185,144C196.9,160,209,160,222,165.3C233.8,171,246,181,258,186.7C270.8,192,283,192,295,202.7C307.7,
							13,320,235,332,224C344.6,213,357,171,369,160C381.5,149,394,171,406,181.3C418.5,192,431,192,443,181.3C455.4,171,468,149,
							480,170.7C492.3,192,505,256,517,256C529.2,256,542,192,554,154.7C566.2,117,578,107,591,90.7C603.1,75,615,53,628,53.3C640,
							53,652,75,665,112C676.9,149,689,203,702,192C713.8,181,726,107,738,106.7C750.8,107,763,181,775,224C787.7,267,800,277,812,
							282.7C824.6,288,837,288,849,245.3C861.5,203,874,117,886,85.3C898.5,53,911,75,923,96C935.4,117,948,139,960,128C972.3,117,
							985,75,997,85.3C1009.2,96,1022,160,1034,165.3C1046.2,171,1058,117,1071,112C1083.1,107,1095,149,1108,149.3C1120,149,1132,107,
							1145,90.7C1156.9,75,1169,85,1182,122.7C1193.8,160,1206,224,1218,208C1230.8,192,1243,96,1255,80C1267.7,64,1280,128,1292,
							170.7C1304.6,213,1317,235,1329,245.3C1341.5,256,1354,256,1366,218.7C1378.5,181,1391,107,1403,85.3C1415.4,64,1428,96,1434,
							112L1440,128L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,
							320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,
							320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,
							320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,
							862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,
							320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,
							320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,
							320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,
							320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z">
						</path>
					</svg>
				</div>

			</div>
		</div >
	)
};

export default About;



