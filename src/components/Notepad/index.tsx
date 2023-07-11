import { FC, MouseEventHandler } from "react";
import CloseButton from "../CloseButton";
import NotepadBg from "../../assets/notepad.png";
import "./index.scss";

interface Props {
	closeNotepad: MouseEventHandler;
}

const Notepad: FC<Props> = ({ closeNotepad }) => {
	return (
		<div className="modal-backdrop">
			<article className="modal notepad">
				<img src={NotepadBg} alt="Notepad" className="notepad-bg" />
				<CloseButton modal='notepad' onClick={closeNotepad} />
				<div className="notepad-content">
					<section className="notepad-section">
						<p className='notepad-section-heading'>Lore</p>
						<p className="modal-text">
							While exploring the depths of a barren forest, where many&nbsp;
							dare not traverse; you stumble upon a decrepit wooden cabin.
							<br /><br />
							It's dark, yet alluring aura beckons you...
							<br /><br />
							You take a cautious step inside.
							<br /><br />
							The walls are lined with rusty tools and the bench riddled&nbsp;
							with odd gardening supplies.
							<br /><br />
							Someone's old shed perhaps.
							<br /><br />
							You turn to leave, but something catches your eye.
							<br /><br />
							Across the room, perched on the windowsill; One Plant, alone&nbsp;
							and barely alive.
							<br /><br />
							The last beacon of life in this forest. You take it upon&nbsp;
							yourself to ensure the Plant's survival.
							<br /><br />
							Unbeknownst to you at the time, this was the single decision&nbsp;
							that altered the path of your destiny forever.
						</p>
					</section>
					<section className="notepad-section">
						<p className="notepad-section-heading">FAQ</p>
						<section className="notepad-subsection">
							<p className="notepad-subsection-heading">How does this work?</p>
							<p className="modal-text">
								One Plant is an on-chain experiment with no roadmap, no&nbsp;
								discord, no utility.
								<br /><br />
								Players (Gardeners), collect treasure by minting an NFT&nbsp;
								(watering the Plant). Thecountdown resets to 15 minutes&nbsp;
								each time a gardener finds treasure. The Plant dies and&nbsp;
								the game ends if the countdown hits zero.
							</p>
						</section>
						<section className="notepad-subsection">
							<p className="notepad-subsection-heading">
								What will my NFT look like?
							</p>
							<p className="modal-text">
								There are 16 types of treasure that can be minted. The&nsbp;
								treasure you receive depends on the point in the countdown&nbsp;
								that you mint in. The full 15 minute countdown is made up&nbsp;
								of 75 blocks, each of which lasts 12s. The treasure you&nbsp;
								get is based on the block order. Treasure discovered when&nbsp;
								the countdown is closer to running out will be inherently&nbsp;
								rarer and likely have a lower supply.
							</p>
						</section>
						<section className="notepad-subsection">
							<p className="notepad-subsection-heading">
								How much does it cost?
							</p>
							<p className="modal-text">
								This drop uses a pay-what-you-want pricing model. You can&nbsp;
								choose to pay nothing, but all contributors are greatly&nbsp;
								appreciated and will help us build more awesome things.
								<br /><br />
								Anyone who contributes at least 0.02 ETH will receive a&nbsp;
								place on the whitelist for our next big project.
							</p>
						</section>
						<section className="notepad-subsection">
							<p className="notepad-subsection-heading">
								I didn't receive what I expected - what happened?
							</p>
							<p className="modal-text">
								This means someone confirmed their mint transaction before&nbsp;
								you. The confirmation speed for your mint is based on the&nbsp;
								amount of gas used for the transaction, and in some&nbsp;
								scenarios, another minter can have pending transactions&nbsp;
								ahead of yours that are not yet reflected in the countdown.
							</p>
						</section>
						<section className="notepad-subsection">
							<p className="notepad-subsection-heading">Who made this?</p>
							<ul className="notepad-subsection-list">
								<li className="notepad-subsection-list-item modal-text">
									Founder&nbsp;
									<a
											href="https://twitter.com/themavrek"
											target="_blank"
											rel="noreferrer noopener"
											className="notepad-link modal-text"
									>
										@themavrek
									</a>
								</li>
								<li className="notepad-subsection-list-item modal-text">
									Artwork&nbsp;
									<a
											href="https://twitter.com/ninaspixels"
											target="_blank"
											rel="noreferrer noopener"
											className="notepad-link modal-text"
									>
										@ninaspixels
									</a>
								</li>
								<li className="notepad-subsection-list-item modal-text">
									Frontend&nbsp;
									<a
											href="https://neilkhatri.com/"
											target="_blank"
											rel="noreferrer noopener"
											className="notepad-link modal-text"
									>
										@neil
									</a>
								</li>
								<li className="notepad-subsection-list-item modal-text">
									Solidity&nbsp;
									<a
											href="https://twitter.com/spartablock"
											target="_blank"
											rel="noreferrer noopener"
											className="notepad-link modal-text"
									>
										@spartablock
									</a>
								</li>
							</ul>
						</section>
						<section className="notepad-subsection">
							<p className="notepad-subsection-heading">Why One Plant?</p>
							<p className="modal-text">
								This is just the beginning of something much bigger...
							</p>
						</section>
						<section className="notepad-subsection">
							<p className="notepad-subsection-heading">
								What do the numbers mean on the treasure?
							</p>
							<p className="modal-text">
								The roman numerals in a monk's name tell you the block&nbsp;
								that the monk was minted in within the window for that monk.
								<br /><br />
								For example, Magnus can be minted within blocks 75-71.&nbsp;
								Block 75 is the first block in the Magnus window, which&nbsp;
								means it receives roman numeral “I”. Block 74 receives&nbsp;
								numeral “II” and so on. This restarts with each monk.
								<br /><br />
								The serial number represents the order in which all monks&nbsp;
								were minted. The lower the number, the earlier the mint date.
							</p>
						</section>
					</section>
				</div>
			</article>
		</div>
	)
};

export default Notepad;