import { IonItem, IonLabel, IonToggle } from '@ionic/react';
import './mcofflinebutton.css';
import { useState } from 'react';
import useOffline from 'hooks/useOffline';
import MCConfirmAlert from '../MCconfirmalert/mcconfirmalert';
import { constants } from "global/constants";


export default function MCOfflineButton() {
	const [showAlert, setShowAlert] = useState(false);
	const { offlineMode, setOfflineMode } = useOffline();

	function toggleOfflineMode() {
		if (offlineMode === true) {
			setOfflineMode(false);
		} else {
			setOfflineMode(true);
		}
	}

	const handleAlertYes = () => {
		toggleOfflineMode();
		handleAlertDismiss();
	};

	const handleAlertDismiss = () => {
		setShowAlert(false);
	};

	const openAlert = () => {
		setShowAlert(!showAlert);
	};

	return (
		<>
			<IonItem className="menu-item">
				<IonLabel color="primary">Modo offline</IonLabel>
				<IonToggle color="primary" checked={offlineMode} slot="end" onIonChange={openAlert}></IonToggle>
			</IonItem>
			<MCConfirmAlert
				showAlert={showAlert}
				onDismiss={handleAlertDismiss}
				header={offlineMode ? constants.confirModal.online.header : constants.confirModal.offline.header}
				message={offlineMode ? constants.confirModal.online.msg : constants.confirModal.offline.msg}
				onYesClick={handleAlertYes}
			/>
		</>
	);
}
