import React from 'react'
import { Metric } from './Metric'

export const ContentRowMovies = () => {

	const metrics = [
		{
			title : "Movies",
			color : "primary",
			icon : "fa-film",	
		},
		{
			title : "Awards",
			color : "success",
			icon : "fa-award",
		},
		{
			title : "Users",
			color : "warning",
			icon : "fa-user"
		}
	]

  return (
    <div className="row">					
			{
				metrics.map((metric, index) => ( 
					<Metric {...metric}/>
				))
			}
	</div>
  )
}

/* 						<div className="col-md-4 mb-4">
							<div className="card border-left-success shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-success text-uppercase mb-1"> Total awards</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">79</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						
						<div className="col-md-4 mb-4">
							<div className="card border-left-warning shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Actors quantity
											</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">49</div>
										</div>
									</div>
								</div>
							</div>
						</div> */