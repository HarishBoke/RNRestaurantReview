import {Colors} from 'react-native/Libraries/NewAppScreen';

export default {
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  sectionContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: '#ddd',
    borderBottomWidth: 1,
  },
  sectionCount: {
    fontSize: 18,
    fontWeight: '800',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black,
    flex: 6,
  },
  sectionButton: {
    fontWeight: '600',
    borderWidth: 1,
    borderColor: '#0066cc',
    borderRadius: 18,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  sectionButtonText: {
    color: '#0066cc',
    fontSize: 12,
  },
  sectionSubTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#999',
    paddingLeft: 20,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  flexColumn: {
    flexDirection: 'row',
  },
  infoMessage: {
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ddd',
    marginHorizontal: 40,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
};
