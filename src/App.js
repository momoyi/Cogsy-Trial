import logo from "./assets/img/logo.png";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="">
				<div className="navbar">
					<img src={logo} alt="Cogsy Logo" />
				</div>
			</header>
			<main>
				<div className="container-fluid">
					<div className="row m-0 w-100">
						<div className="col-12">
							<h4 className="mt-5 color-dark">
								Cogsy Trial Dashboard (Opportunites Section)
							</h4>
						</div>
						<div className="col-md-5 col-lg-5">
							<div className="card mt-4 w-100">
								<div className="card-body">
									<div className="w-100 flex-row justify-content-between d-flex">
										<h5 className="card-title">
											Opportunities
										</h5>
										<a
											href="#"
											className="font-weight-medium color-purple"
										>
											View All
										</a>
									</div>

									<table class="table table-borderless">
										<thead>
											<tr>
												<th scope="col">
													ID
												</th>
												<th scope="col">
													Product
												</th>
												<th scope="col">
													Value
												</th>
												<th scope="col">
													Action
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<th
													className="id"
													scope="row"
												>
													2MFr220
												</th>
												<td>
													Pringles
													Super
													Pack
												</td>
												<td>
													$10,660
												</td>
												<td>
													<button className="action increase">
														INCREASE
														PRICE
													</button>
												</td>
											</tr>
											<tr>
												<th
													className="id"
													scope="row"
												>
													YRM310
												</th>
												<td>
													Zorc
													Cigar
													Pack
												</td>
												<td>
													$10,213
												</td>
												<td>
													<button className="action increase">
														INCREASE
														PRICE
													</button>
												</td>
											</tr>
											<tr>
												<th
													className="id"
													scope="row"
												>
													DG4211
												</th>
												<td>
													Maltesers
													Medium
													Choc...
												</td>
												<td>
													$9,205
												</td>
												<td>
													<button className="action decrease">
														DECREASE
														PRICE
													</button>
												</td>
											</tr>
											<tr>
												<th
													className="id"
													scope="row"
												>
													AR3P50
												</th>
												<td>
													Snickers
													Medium
													Choca...
												</td>
												<td>
													$8,660
												</td>
												<td>
													<button className="action promote">
														promote
													</button>
												</td>
											</tr>
											<tr>
												<th
													className="id"
													scope="row"
												>
													f2d22i
												</th>
												<td>
													Treo
													Standing
													Desk
												</td>
												<td>
													$4,360
												</td>
												<td>
													<button className="action clearance">
														clearance
														sale
													</button>
												</td>
											</tr>
											<tr>
												<th
													className="id"
													scope="row"
												>
													A2K2Li
												</th>
												<td>
													120g
													Hertz
													Baked
													Beans
												</td>
												<td>
													$4,100
												</td>
												<td>
													<button className="action decrease">
														decrease
														price
													</button>
												</td>
											</tr>
											<tr>
												<th
													className="id"
													scope="row"
												>
													ra5p80
												</th>
												<td>
													Kellogg’s
													Corn
													Flakes
												</td>
												<td>
													$3,950
												</td>
												<td>
													<button className="action increase">
														increase
														price
													</button>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
